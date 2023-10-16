import Link from "next/link";

const links = [{
    label: 'Inicio',
    route: '/'
},
{
    label: 'Nosotros',
    route: '/about'
},
{
    label: 'Login',
    route: '/login'
},
{
    label: 'Productos',
    route: '/product'
},
{
    label: 'Carrito',
    route: '/shopping'
},
{
    label: 'Usuarios',
    route: '/users'
},
{
    label: 'Ventas',
    route: '/balances'
},
]
export function Navigation() {
    return (
        <header>
            <nav >
                <ul className="flex justify-around">
                    {links.map(({ label, route }) => (
                        <li className="flex-none w-40 h-30 p-10" key={route}>
                            <Link href={route}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}