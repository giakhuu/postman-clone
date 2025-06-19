export class Auth {
    constructor(
        public type: 'bearer' | 'basic' | 'noauth',
        public credentials: Record<string, string>
    ) {}
}