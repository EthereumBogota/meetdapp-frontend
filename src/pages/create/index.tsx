import React, { useRef, useState } from 'react'
import { Progress, Box, ButtonGroup, Button, Flex } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { EventDetails } from '@/models/event-details.model'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import Form1Create, {
	Form1CreateInput,
	Form1CreateRef
} from '../../components/create/Form1Create'
import Form2Create, {
	Form2CreateInput,
	Form2CreateRef
} from '../../components/create/Form2Create'
export interface CreateprojectForm {
	proyectName: string
	projectCountry: string
	proyectDescription: string
	category: string
	members: string
	logo?: File | string | null | undefined
	banner?: File | string | null | undefined
}
interface FormProps {
	eventData?: EventDetails
}
export default function CreateForm(props: FormProps) {
  const [user, setUser] = useState(null)

	const router = useRouter()
	const toast = useToast()
	const stepNumber = 2
	const costPerTon = 10
	let form2info: Form2CreateInput
	const form1CreateRef = useRef<Form1CreateRef>(null)
	const form2CreateRef = useRef<Form2CreateRef>(null)
	const [step, setStep] = useState(1)
	const [progress, setProgress] = useState(100 / stepNumber)
	const [loading, setLoading] = useState(false)
	const [eventInfo, setEventInfo] = useState<EventDetails | null>(
		props.eventData || null
	)
	const [formInfo, setFormInfo] = useState<CreateprojectForm>({
		proyectName: '',
		projectCountry: '',
		proyectDescription: '',
		category: '',
		members: '',
		logo: null,
		banner: null
	})
	const onSetInfoForm1 = (info: Form1CreateInput) => {
		setFormInfo({
			...formInfo,
			proyectName: info.proyectName,
			proyectDescription: info.proyectDescription,
			category: info.category,
			members: info.members,
			logo: info.logo,
			banner: info.banner
		})
	}
	const onSetInfoForm2 = (info: Form2CreateInput) => {
		form2info = info
	}
	const onNext = () => {
		if (step === 1 && form1CreateRef.current) {
			form1CreateRef.current.validateAndSubmit(() => {
				showNextForm()
			})
		} else if (step === 2 && form2CreateRef.current) {
			console.log('2')

			form2CreateRef.current.validateAndSubmit(() => {
				onCreateProject()
			})
		}
	}
	const showNextForm = () => {
		setStep(step + 1)
		if (step === stepNumber + 1) {
			setProgress(100)
		} else {
			setProgress(progress + 100 / stepNumber + 1)
		}
	}
	const onCreateProject = async () => {
		console.log('submit?')

		if (!user) {
			toast({
				title: 'Please connect your wallet first',
				description: 'Please login.',
				status: 'warning',
				duration: 5000,
				isClosable: true
			})
			return
		}
		try {
			setLoading(true)
			//upload logo & banner images to firebase
			const images: File[] = [formInfo.logo as File, formInfo.banner as File]
			//const imgs: string[] | null = await uploadImages(images)

			const newProject: any = {
				
			}
			//const response = await createProject(newProject)
			toast({
				title: 'Project created.',
				description: "We've created your project.",
				status: 'success',
				duration: 5000,
				isClosable: true
			})
			console.log('Project Done')
			router.push(`/dashboard?id=${newProject.project_id}`)
		} catch (error) {
			console.log(error)
			toast({
				title: 'Error creating project',
				description: 'Please try again.',
				status: 'error',
				duration: 5000,
				isClosable: true
			})
			setLoading(false)
		}
	}
	return (
		<div>
			<Box
				borderWidth='1px'
				rounded='lg'
				maxWidth={900}
				p={6}
				m='40px auto'
				as='form'
			>
				<Progress
					hasStripe
					value={progress}
					borderRadius='lg'
					mb='5%'
					isAnimated
				></Progress>
				{}
				{step === 1 ? (
					<Form1Create
						ref={form1CreateRef}
						onValidationComplete={onSetInfoForm1}
					/>
				) : (
					<Form2Create
						ref={form2CreateRef}
						onValidationComplete={onSetInfoForm2}
						loading={loading}
					/>
				)}
				<ButtonGroup mt='5%' w='100%' justifyContent='flex-end'>
					<Button
						onClick={() => {
							setStep(step - 1)
							setProgress(progress - 100 / stepNumber)
						}}
						isDisabled={step === 1}
						w='7rem'
						mr='5%'
						isLoading={loading}
					>
						Back
					</Button>
					{step !== stepNumber ? (
						<Button
							w='7rem'
							isDisabled={step === stepNumber}
							onClick={onNext}
							variant='primary'
							isLoading={loading}
						>
							Next
						</Button>
					) : null}
					{step === stepNumber ? (
						<Button
							w='9rem'
							variant='darkie'
							onClick={onNext}
							isLoading={loading}
						>
							Create project
						</Button>
					) : null}
				</ButtonGroup>
			</Box>
		</div>
	)
}
