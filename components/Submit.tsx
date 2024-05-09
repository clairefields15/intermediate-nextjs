'use client'
import { Button, ButtonProps } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

type SubmitProps = {
	label: string
	btnProps?: ButtonProps
}

const Submit = ({ label, ...btnProps }: SubmitProps) => {
	const { pending } = useFormStatus()

	return (
		<Button {...btnProps} type="submit" isLoading={pending}>
			{label}
		</Button>
	)
}

export default Submit
