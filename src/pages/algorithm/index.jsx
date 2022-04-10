import styled from "styled-components";
import {max, min} from "../../helper";
import Container from "../../component/container";

const AlgorithmPage = styled(Container)`
`

export default function Algorithm() {
	const array = [1, 3, 5, 7, 9]
	
	const
		excludingTheLargestNumber = array.filter((item) => item !== max(array))
	
	const
		excludingTheSmallestNumber = array.filter((item) => item !== min(array))
	
	const MiniSum = excludingTheLargestNumber.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
	const MaxSum = excludingTheSmallestNumber.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
	
	const initialNumbers = [1,2,3,4,5]
	
	const sumEveryThingExcludeExpectedNumber = (numb) => {
			const except = initialNumbers.filter((item) => item !== numb);
			const sum = except.reduce((newArr, item) => {
				return (newArr + item);
			});
			return { sum };
	}
	
	const bonusArray = [12,4,2,3,2]
	
	
	
	return (
		<AlgorithmPage>
			<p>- Mini-Max Sum: </p>
			<p>+ Initial Array: [{array.toString()}]</p>
			<p>+ Mini-Max Sum: {MiniSum} {MaxSum}</p>
			
			<p>- Initial Array:[{initialNumbers.toString()}]</p>
				{
					initialNumbers.map((number, index) => {
						if (index+1 <= 5) {
							return <p>If we sum everything except {index + 1}, our sum is: {sumEveryThingExcludeExpectedNumber(index + 1).sum}</p>
						}
					})
				}
			<p>
				- Bonus:
			</p>
			<p>
				Initial Array = [{bonusArray.toString()}]
			</p>
			<p>Count Total: {bonusArray.reduce((a, b) => a + b, 0)}</p>
			<p>Min: {min(bonusArray).toString()}</p>
			<p>Max: {max(bonusArray).toString()}</p>
			<p>Even Number: [{bonusArray.filter(number => number % 2 === 0).toString()}]</p>
			<p>Odd: [{bonusArray.filter(number => number % 2 !== 0).toString()}]</p>
			
		</AlgorithmPage>
	)
}
