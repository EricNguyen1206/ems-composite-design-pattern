import mongoose, { Document } from "mongoose";
import { AComponent } from "./component";

class Employee extends AComponent {
    private title: String;
    private salary: number;

    constructor(name: string, title: string, salary: number) {
        super(name);
        this.title = title;
        this.salary = salary;
    }

    public getCosts(): number {
        return this.salary;
    }

    public isComposite(): boolean {
        return false;
    }
}

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "component",
        default: null,
        required: false,
    },
});

const EmployeeDB =
    mongoose.models.EmployeeDB || mongoose.model("employee", EmployeeSchema);

export { Employee, EmployeeSchema };
export default EmployeeDB;
