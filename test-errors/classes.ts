class A {
    x: number = 42 // TS9209 - field initializers
}
class B extends A { } // TS9228 - inheritence
interface C { } // Probably should emit some sort of error, just skips it at the moment
class D implements C { } // TS9228
class G<T> { } // Generics now supported
class S {
    public static x: number
    public static m() { }
}
S.x = 42 // TS9247 - can be removed if static field support is added
S.m() // TS9235 - can be removed if static method support is added
