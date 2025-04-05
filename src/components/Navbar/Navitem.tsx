interface NavbarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  isActive?: boolean;
}

export const NavbarItem = ({ icon: Icon, isActive = false, ...props }: NavbarItemProps) => (
  <button
    className='size-large hover:bg-secondary/10 active:bg-secondary/20 flex cursor-pointer items-center justify-center rounded-4xl transition-colors duration-300'
    {...props}
  >
    <Icon
      className='data-[active=true]:text-secondary data-[active=true]:drop-shadow-secondary/50 opacity-25 transition-colors duration-300 data-[active=true]:opacity-100 data-[active=true]:drop-shadow-lg'
      data-active={isActive ? 'true' : 'false'}
    />
  </button>
);
