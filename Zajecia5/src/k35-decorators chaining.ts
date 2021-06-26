function admin(target: object, propKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    console.log("ADMIN DECORATOR: ", target, propKey, descriptor);
    const method = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log('ADMIN DECOCATOR DESCRIPTOR CALL', args)
        const permSet = 'admin';
        const result = method.apply(this, [...args, permSet]);
        console.log(`ADMIN DECORATOR Call`);
        return result;
    }
    return descriptor;
}
function moderator(target: object, propKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    console.log("MODERATOR DECORATOR: ", target, propKey, descriptor);
    const method = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log('MODERATOR DECOCATOR DESCRIPTOR CALL', args)
        const permSet = 'mod';
        const result = method.apply(this, [...args, permSet]);
        console.log(`MODERATOR DECORATOR Call`);
        return result;
    }
    return descriptor;
}

function watch(target: object, propKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    console.log("WATCH DECORATOR: ", target, propKey, descriptor);
    const method = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log('METHOD DECOCATOR DESCRIPTOR CALL', args)
        const permSet = 'watch';
        const result = method.apply(this, [...args, permSet]);
        console.log(`WATCH DECORATOR Call`);
        return result;
    }
    return descriptor;
}
class Person3 {
    private lastName: string;
    constructor(name: string) {
        console.warn("from constructor,  name: ", name)
    }

    @admin
    @moderator
    @watch
    setLastName(lastName: string, ...permSet: any): string {
        this.lastName = lastName;
        console.warn('from setLastName', this.lastName)
        console.warn({ permSet })
        return "I'm " + lastName;
    }
}
const p3 = new Person3('kate')
console.warn(p3.setLastName('bush'))