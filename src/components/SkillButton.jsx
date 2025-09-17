export default function SkillButton({ icon, text }) {
    return (
        <div className="flex items-center gap-2 rounded-md bg-secondary-300 px-2 py-1 font-satoshi text-accent-400">
            {icon && <div className="text-lg">{icon}</div>}
            <div>{text}</div>
        </div>
    );
}
