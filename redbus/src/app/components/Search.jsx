import { useRouter } from "next/navigation";

export default function Search(fromData, toData, dateData) {
    const router = useRouter();

    const initialValues = {
        from: fromData,
        to: toData,
        date: dateData,
    };
    // const [state,setState] = useState(initialValues)
    console.log("Search called with:", initialValues); 

    // router.push(`/buses?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}`);
    
}