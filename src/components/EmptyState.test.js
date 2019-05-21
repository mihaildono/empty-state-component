import React from 'react';
import TestRenderer from 'react-test-renderer';
import EmptyState from './EmptyState';

const renderer = TestRenderer.create(
    <EmptyState
        type="empty"
        textCollection={[
            "You have no new items!",
            "Take this time to explore new ways to improve your marketing."
        ]}
        buttonInfo={{
            handler: () => window.open('https://www.example.com/'),
            text: "Explore"
        }}
    />
);

test('number of paragraphs to equal 2 and button exists', () => {
    expect(renderer.root.findAllByType('p')).toHaveLength(2);
    expect(renderer.root.findByType('button')).toBeTruthy();
})
