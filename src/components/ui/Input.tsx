// components/InputField.tsx
import React from "react"

type Variant = "default" | "underline"

type InputFieldProps = {
	id: string
	label?: string
	placeholder?: string
	type?: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	className?: string
	variant?: Variant
}

export default function InputField({
	id,
	label,
	placeholder,
	type = "text",
	value,
	onChange,
	className = "",
	variant = "default"
}: InputFieldProps) {
	let variantClasses = ""

	if (variant === "default") {
		variantClasses =
			"rounded-xl border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
	} else if (variant === "underline") {
		variantClasses =
			"border-0 border-b border-gray-400 bg-transparent px-0 py-2 focus:border-blue-500 focus:ring-0"
	}

	const inputClasses =
		"w-full text-sm focus:outline-none " + variantClasses + " " + className

	return (
		<div className="flex flex-col gap-2">
			{label && (
				<label htmlFor={id} className="text-sm font-medium text-gray-700">
					{label}
				</label>
			)}
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className={inputClasses}
			/>
		</div>
	)
}
