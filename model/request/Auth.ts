export class Auth {
    constructor(
        public type: 'beaer' | 'basic' | 'noauth',
        public credentials: Record<string, string>
    ) {}
}