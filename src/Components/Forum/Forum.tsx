import React, { useRef, useState } from 'react';
import '/src/index.css';
import CreateThreadPage from './CreateThread';
import RecentThreads from './RecentThreads';
import HighlightedThreads from './HighlightedThreads';
import { useNavigate } from 'react-router-dom';

function Forum() {
    const navigate = useNavigate();
    const drawerRef = useRef<HTMLDivElement>(null);
    const [activeComponent, setActiveComponent] = useState('recentThreads');
    const [highlightedIds, setHighlightedIds] = useState<string[]>([]);

    const handleHighlightChange = (newHighlightedIds: string[]) => {
        setHighlightedIds(newHighlightedIds);
    };


    const renderComponent = () => {
        switch (activeComponent) {
            case 'recentThreads':
                return <RecentThreads onHighlightChange={handleHighlightChange} />;
            case 'createThread':
                return <CreateThreadPage />;
            case 'highlightedthreads':
                return <HighlightedThreads threadIds={highlightedIds} />;
            default:
                return <RecentThreads onHighlightChange={handleHighlightChange} />;
        }
    };

    return (
        <div className="forum-container">
            <header className="forum-header">
                <h1>FORUM</h1>
                <main className="forum-main">
                    {renderComponent()}
                </main>
            </header>
            <aside className="forum-drawer" ref={drawerRef}>
                <ul className="forum-list">
                    <li className="forum-list-item" onClick={() => setActiveComponent('recentThreads')}>Recent Threads</li>
                    <li className="forum-list-item" onClick={() => setActiveComponent('createThread')}>Create Threads</li>
                    <li className="forum-list-item" onClick={() => setActiveComponent('highlightedthreads')}>Highlighted Threads</li>
                    <li className='forum-list-item' onClick={() => navigate('/spotify-container')}>Leave Forum</li>
                </ul>
            </aside>
        </div>
    );
}

export default Forum;