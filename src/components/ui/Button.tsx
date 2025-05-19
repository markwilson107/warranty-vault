import Link from 'next/link'
import React from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	variant?: ButtonVariant
	size?: ButtonSize | Record<string, ButtonSize>
	fullWidth?: boolean
	href?: string
	className?: string
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	size = 'md',
	fullWidth = false,
	href,
	className = '',
	...props
}) => {
	const baseClasses = 'font-medium rounded-md inline-flex items-center justify-center cursor-pointer select-none text-center'

	const paddingMap = {
		sm: 'px-3 py-2.5',
		md: 'px-5 py-3',
		lg: 'px-5 py-4'
	}

	const textSizeMap = {
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg'
	}

	const variantClasses = {
		primary: 'bg-theme1 hover:brightness-105 text-black',
		secondary: 'bg-theme2 hover:brightness-105 text-white',
		outline: 'border border-primary hover:brightness-105 bg-transparent text-primary',
		text: 'text-primary hover:brightness-105 bg-transparent'
	}

	const widthClass = fullWidth ? 'w-full' : ''

	let sizeClassString = ''

	if (typeof size === 'string') {
		sizeClassString = `${paddingMap[size]} ${textSizeMap[size]}`
	} else {
		sizeClassString = Object.entries(size)
			.map(([breakpoint, sizeKey]) => `${breakpoint}:${paddingMap[sizeKey]} ${breakpoint}:${textSizeMap[sizeKey]}`)
			.join(' ')
	}

	const buttonClasses = `${baseClasses} ${sizeClassString} ${variantClasses[variant]} ${widthClass} ${className}`

	if (href) {
		return (
			<Link href={href} className={buttonClasses}>
				{children}
			</Link>
		)
	}

	return (
		<button className={buttonClasses} {...props}>
			{children}
		</button>
	)
}

export default Button
