
type IconProps =  {
    icon: string;
    alt:string;
}
function Icon ( {icon, alt}: IconProps) {
    return (
        <img
            src={icon}
            alt={alt}
        />
    )
}

export default Icon;