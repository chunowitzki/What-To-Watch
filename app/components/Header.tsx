
export default function Header() {
    return (
        <header className="w-full h-16 flex flex-col items-center justify-center border-b border-gray-700">
            <h1 className="text-3xl font-bold leading-none tracking-[2px]">What to Watch</h1>
            <p className="text-sm text-muted-foreground text-gray-400 tracking-[1px]">
                Find your next obsession
            </p>
        </header>
    );
}