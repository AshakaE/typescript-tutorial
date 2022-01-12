export class Monitor {
    public static printInstances(): string {
        let res = ''
        Counter.objectsCount.forEach((value: number, key: string)=>{
            res  = res  + `${key}: ${value} \n`
        })
        return res
    }

}

class Counter {
    static objectsCount: Map<string, number> = new Map()
    static increment(className: string) {
        if (!this.objectsCount.get(className)) {
            this.objectsCount.set(className, 1)
        } else {
            const currentValue = this.objectsCount.get(className)
            this.objectsCount.set(className, currentValue! + 1)
        }
    }
}

export function countInstances(constructor: Function) {
    Counter.increment(constructor.name)
}
 