import {z} from "zod";

export const validateQueryScema = z.object({
    limit:z.string().optional().default("10"),
    page:z.string().optional().default("1"),
    status:z.string().optional(),
    claimer : z.string().optional(),
    creater: z.string().optional(),
    currency: z.string().optional(),
    category: z.string().optional()
});

export const validateQuery = (query) =>{
    console.log("aditya",query);

    const safeQuery = validateQueryScema.safeParse(query);
    if(!safeQuery.success) {
        throw new Error("Invalid query parameters");
    }
    return safeQuery.data;
}

// limit, category, claimer, creater, currency, page, status