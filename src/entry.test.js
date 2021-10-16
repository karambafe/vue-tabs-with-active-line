const rewire = require("rewire")
const entry = rewire("./entry")
const install = entry.__get__("install")
// @ponicode
describe("install", () => {
    test("0", () => {
        let callFunction = () => {
            install({ component: () => "bc23a9d531064583ace8f67dad60f6bb" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            install({ component: () => "c466a48309794261b64a4f02cfcc3d64" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            install({ component: () => 12345 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            install({ component: () => "da7588892" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            install({ component: () => 9876 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            install(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
