import mongoose, { Document } from "mongoose";

abstract class AComponent {
    private name: string;
    protected parent: AComponent | null;

    constructor(name: string) {
        this.name = name;
        this.parent = null;
    }
    /**
     * Optionally, the base Component can declare an interface for setting and
     * accessing a parent of the component in a tree structure. It can also
     * provide some default implementation for these methods.
     */
    public setParent(parent: AComponent | null) {
        this.parent = parent;
    }

    public getParent(): AComponent | null {
        return this.parent;
    }

    /**
     * In some cases, it would be beneficial to define the child-management
     * operations right in the base Component class. This way, you won't need to
     * expose any concrete component classes to the client code, even during the
     * object tree assembly. The downside is that these methods will be empty
     * for the leaf-level components.
     */
    public add(component: AComponent): void {}

    public remove(component: AComponent): void {}

    /**
     * You can provide a method that lets the client code figure out whether a
     * component can bear children.
     */
    public abstract isComposite(): boolean;

    /**
     * The base Component may implement some default behavior or leave it to
     * concrete classes (by declaring the method containing the behavior as
     * "abstract").
     */
    public abstract getCosts(): number;
}

const ComponentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "component",
        default: null,
        required: false,
    },
});

const ComponentDB = mongoose.model("component", ComponentSchema);

export { AComponent, ComponentSchema };
export default ComponentDB;
