/**
 * What benefits do these two react memoized functions provide
 * and how do they differ from each other?
 */

const SampleComponentA = ({ data }) => {
    const [data] = useMemo(() => data.map(({ id }) => id), [data])); 
    return (
      <div>...</div>
    )
  }
  
  // Display this code to the candidate
  const SampleComponentB = (props) => {
    return (
      <div>...</div>
    )
  }
  
  export default React.memo(SampleComponentB)