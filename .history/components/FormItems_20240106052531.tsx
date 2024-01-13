interface FormItemsProps {
   title: string | undefined,
   subtitle: string | undefined,
   name: string | undefined
}

const FormItems:React.FC<FormItemsProps> = ({
    title,
    subtitle,
    name
}) => {
    console.log('props',title)
  return (
    <div>
     Hello Form Item
    </div>
  )
}

export default FormItems
