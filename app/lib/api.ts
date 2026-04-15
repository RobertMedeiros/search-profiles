
export async function searchProfile() {
    const resposta = await fetch("https://randomuser.me/api/?results=10&page=1")

    const dados = await resposta.json()

    return dados.results
}