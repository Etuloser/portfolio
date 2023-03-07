import { useRouter } from "next/router";
import Link from "next/link";
import { menuData } from "../libs/menus";
const MenuPanel = () => {
	const { asPath } = useRouter();
	return (
		<section className="rounded-xl text-left w-2/8">
			{menuData.map((menu, index) => {
				return (
					<Link
						href={asPath !== menu.route ? menu.route : "#"}
						key={`menuButton${index}`}
						className={
							(asPath !== menu.route
								? "hover:bg-gray-400 hover:shadow-xl hover:shadow-gray-200 border-white "
								: "bg-gray-200 border-gray-200") +
							" flex items-center gap-2 w-full p-4 ease-linear duration-200 rounded-lg mb-1 group"
						}
					>
						{asPath !== menu.route ? (
							<menu.icon className="w-8 h-8 group-hover:stroke-white" />
						) : (
							<menu.activeIcon className="w-8 h-8" />
						)}
						<span className="group-hover:text-white">{menu.name}</span>
					</Link>
				);
			})}
		</section>
	);
};

export default MenuPanel;
