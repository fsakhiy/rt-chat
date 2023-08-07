"use server"
import { prisma } from '@/prisma/libraries/prisma'

const Data = async () => {
    const data = await prisma.testData.findMany()
    
    return(
        <div>
            {data.map((value) => (
                <div key={value.id}>{value.value}</div>
            ))}
        </div>
    )
}

export default Data