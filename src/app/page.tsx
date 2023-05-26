import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'

export default async function Home() {
  return (
    <main style={{ position: "relative" }}>
      <Input 
        label="Acesse com sua API Key:" 
        placeholder="Coloque a API Key aqui"
      />
      <br />
      <Button>Entrar</Button>
      <br />
      <Select placeholder="País" label="Escolha um país">
        <option value="Brasil">Brasil</option>
        <option value="EUA">EUA</option>
        <option value="Portugal">Portugal</option>
      </Select>
    </main>
  )
}
