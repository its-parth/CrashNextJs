import Link from "next/link";

export default function Services() {
    return (
        <>
            <h1>Services page</h1>
            <p><Link href={'/services/app-dev'}>App Dev</Link></p>
            <p><Link href={'/services/web-dev'}>Web Dev</Link></p>
        </>
    )
}