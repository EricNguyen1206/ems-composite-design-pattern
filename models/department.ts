import mongoose, { Document } from "mongoose";
import { AComponent, ComponentSchema } from "./component";
import { Employee, EmployeeSchema } from "./employee";

class Department extends AComponent {
    constructor(
        name: string,
        private description: string,
        private manager: Employee,
        private remainingCosts: number = 0,
        private memberList: AComponent[] = []
    ) {
        super(name);
    }

    public setParent(parent: AComponent | null) {
        this.parent = parent;
    }

    public getParent(): AComponent | null {
        return this.parent;
    }

    public add(component: AComponent): void {
        this.memberList.push(component);
        component.setParent(this);
    }

    public remove(component: AComponent): void {
        const componentIndex = this.memberList.indexOf(component);
        this.memberList.splice(componentIndex, 1);

        component.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }

    public getCosts(): number {
        let totalCosts = this.remainingCosts;
        this.memberList.reduce(
            (total, mem) => mem.getCosts() + total,
            totalCosts
        );
        return totalCosts;
    }
}

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employee",
        default: null,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    remainingCosts: {
        type: Number,
        default: 0,
        required: false,
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "component",
        default: null,
        required: false,
    },
    memberList: [ComponentSchema],
});

const DepartmentDB = mongoose.model("department", DepartmentSchema);

export { Department, DepartmentSchema };
export default DepartmentDB;
