type Contact = {
    title: string;
    desc: string;
    buttonText: string;
    icon: any;
    link: { name: string; url: string};
    secondaryLink?: string;
    optional: boolean;
}