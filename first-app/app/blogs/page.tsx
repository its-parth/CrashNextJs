import Link from "next/link";

export default function Blogs() {
    return (
        <div className="flex flex-col items-center">
            <h1>Blogs</h1>
            <p><Link href={'/blogs/1'}>Blog 1</Link></p>
            <p><Link href={'/blogs/2'}>Blog 2</Link></p>
            <p><Link href={'/blogs/3'}>Blog 3</Link></p>
            <p><Link href={'/blogs/4'}>Blog 4</Link></p>
        </div>
    )
}