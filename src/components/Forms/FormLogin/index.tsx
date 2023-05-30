'use client'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Toast } from '@/components/Toast'

import { api } from '@/api/api'

import Style from './styles.module.scss'

export function FormLogin() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)

    if (formData.get('user') === '') {
      toast.error('Coloque a API Key!')
      setIsLoading(false)
    } else {
      await api.get('/status', {
        headers: {
          "x-rapidapi-key": `${formData.get('user')}`
        }
      }).then((res) => {
        if (res.data.errors.token) {
          toast.error('API Key Invalida!')
          setIsLoading(false)
        } else {
          Cookies.set('MT_session', `${formData.get('user')}`, {
            path: '',
            expires: 604800
          })
          router.push('/search')
        }
      }).catch((err) => {
        toast.error('Erro na chamada API!')
        console.log(err)
        setIsLoading(false)
      })
    }
  }

  return (
    <>
      <form className={Style.form} onSubmit={handleSubmit}>
        <Input
          name="user"
          label="Acesse com sua API Key:"
          placeholder="coloque a API Key aqui"
        />
        <h6>Não sabe como entrar?{' '}
          <a href="https://www.api-football.com/documentation-v3#section/Authentication/API-SPORTS-Account" target="_blank">
            Clique aqui
          </a>
        </h6>
        {!isLoading ?
          <Button type="submit">Entrar</Button> :
          <Button disabled>Carregando...</Button>
        }
      </form>
      <Toast />
    </>
  )
}