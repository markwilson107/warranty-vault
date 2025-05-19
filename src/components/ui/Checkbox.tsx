import { useState } from "react"

type CheckboxProps = {
	label: string
	checked?: boolean
	onChange?: (checked: boolean) => void
}

export default function Checkbox({ label, checked = false, onChange }: CheckboxProps) {
	const [isChecked, setIsChecked] = useState(checked)

	const handleChange = () => {
		const newChecked = !isChecked
		setIsChecked(newChecked)
		onChange?.(newChecked)
	}

	return (
		<label className="flex items-center space-x-2 cursor-pointer select-none">
			<input
				type="checkbox"
				checked={isChecked}
				onChange={handleChange}
				className="form-checkbox h-4 w-4"
			/>
			<span>{label}</span>
		</label>
	)
}
