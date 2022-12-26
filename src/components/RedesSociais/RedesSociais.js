import './RedesSociais.css'

const RedesSociais = () => {

    const ListaRedes = [
        { id: 1, urlNome: 'Instagram', url:'https://www.instagram.com/prudenplastico/'},
        { id: 2, urlNome: 'Facebook', url:'https://www.facebook.com/Prudenplastico/'},
        { id: 3, urlNome: 'Linkedin', url:''},
        { id: 4, urlNome: 'Twitter', url:''},
        { id: 5, urlNome: 'Youtube', url:''},
        { id: 6, urlNome: 'TikTok', url:''}
    ]
    const LinksRedes = ListaRedes.map((props) => 
    <div key = {props.id} className = 'conteudo_links'>
        <a href={props.url}>{props.urlNome}</a>
    </div>
    )

    return (
        <>
        {LinksRedes}
        </>
    )
}
export default RedesSociais