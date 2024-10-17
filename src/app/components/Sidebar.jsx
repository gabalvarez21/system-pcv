import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { AiFillProduct } from "react-icons/ai";
import { SidebarMenuItem } from "./SidebarMenuItem";
import Image from "next/image";

const sizeIcon = 30;

const menuItems = [
    {
        path: '/dashboard/product',
        icon: <AiFillProduct size={sizeIcon} />,
        title: 'Producto',
        subtitle: 'Registrar productos'
    },
    {
        path: '/dashboard/shop',
        icon: <GiPayMoney size={sizeIcon} />,
        title: 'Compras',
        subtitle: 'Registrar compras'
    },
    {
        path: '/dashboard/sales',
        icon: <GiReceiveMoney size={sizeIcon} />,
        title: 'Ventas',
        subtitle: 'Registrar ventas'
    },
    {
        path: '/dashboard/inventory',
        icon: <GiTakeMyMoney size={sizeIcon} />,
        title: 'Inventario',
        subtitle: 'Registro de inventario'
    },
]

export const Sidebar = () => {
    return (
        <div id="menu" className="bg-white/10 col-span-3 rounded-lg p-4 ">

            <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-transparent">
                System
                <span className="text-indigo-400">.</span>
            </h1>

            <p className="text-slate-400 text-sm mb-2">¡Bienvenido!,</p>
            <a href="#" className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                <div>
                    <Image
                        className="rounded-full w-10 h-10 relative object-cover"
                        width={40}
                        height={40}
                        src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-linea_23-2151303097.jpg?w=740&t=st=1729195068~exp=1729195668~hmac=a22ca7a36987817c198f39c15796809492c2a7afb3899dcbf848dfb04e827417"
                        alt="" />
                </div>
                <div>
                    <p className="font-medium group-hover:text-indigo-400 leading-4">Persona</p>
                    <span className="text-xs text-slate-400">...</span>
                </div>
            </a>

            <hr className="my-2 border-slate-700" />

            <div id="menu" className="flex flex-col space-y-2 my-5">

                {
                    menuItems.map(item => (
                        <SidebarMenuItem key={item.path} {...item} />
                    ))
                }

            </div>

            <p className="text-sm text-center text-gray-600">v2.0.0.3 | &copy; 2022 Pantazi Soft</p>
        </div>
    )
}
