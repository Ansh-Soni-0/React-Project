import ConverterForm from "./components/ConverterForm"

const App = () => {
  return (
    <>
      <div className="currency-converter">

        <h1 className="converter-title">
            Currency Converter
        </h1>

        <ConverterForm />

        
      </div>
    </>
  )
}

export default App