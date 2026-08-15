import { Link } from 'react-router'


export function DashboardPage () {
    return (
        <main className='flex min-h-screen'>
            <aside className='bg-surface fixed h-screen w-64'>
                <Link to="/" className='flex items-end gap-2'>
                    <img className='w-[30px]' src="../public/logo.svg" alt="logo" />
                    <span className='font-bold'>جیـکاپیـــک</span>
                </Link>

                <div></div>
            </aside>
            <section></section>
        </main>
    )
}