import { z } from 'zod';


const schema = z.object({
    name: z.string(),
    price: z.number().min(0.5)
})

export default schema;