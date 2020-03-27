function mikid() {
    let id = 1
    return function () {
        return id++
    }
}
let idc = mikid()
idc()
console.log(idc());
