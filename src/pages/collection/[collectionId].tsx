import { useRouter } from "next/router"

export default function Collection(){
	const route=useRouter()
	return(
		<div className="text-green-300">{route.query.collectionId}</div>
	)
}
