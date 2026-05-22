import prisma from "./db.js";
import bcrypt from "bcrypt";
const hashedPassword = await bcrypt.hash("Sawer1234", 10);
try {
    const admin = await prisma.admin.create({
        data: {
            first_name: "Daniel",
            last_name: "Olugbenga",
            email: "danielgbenga11@gmail.com",
            password: hashedPassword,
        }
    });
    console.log("Admin created successfully:", admin);
}
catch (error) {
    console.error("Error creating admin:", error);
}
