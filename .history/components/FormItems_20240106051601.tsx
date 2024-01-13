interface FormItemsProps {
   data: any
}

const FormItems:React.FC<FormItemsProps> = ({data}) => {
    console.log('props',data.formName)
  return (
    <div>
     Hello Form Item
    </div>
  )
}

export default FormItems
