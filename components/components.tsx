export function Merch() {
    return (
        <div className="merch-container">
            <a href="https://view3.bandcamp.com/album/paper" target="_blank">
                <img src="HC6RuPYWIAEl58X.png"/>
                CD + booklet
            </a>
            <a href="https://view3.bandcamp.com/merch/quilt" target="_blank">
                <img src="https://f4.bcbits.com/img/0043150442_10.jpg"/>
                Quilt
            </a>
        </div>
    );
}

export function Info() {
    return (
        <div>
            We walked down an unpaved road between two fields of gray mud. The sun cast down pale light upon everything in equal measure. An opaque fog demarcated the borders of the scene, as if the hand of a great minister had drawn it just so. We walked and walked. A gray man appeared out of the fog: he was walking in the opposite direction, carried along by an exaggerated limp. His sluggish trudging did well to complement our hastiness. He was muttering to himself as he passed, but the words were too quiet to discern. “What a grotesque man,” I thought to myself. “I’m glad he doesn’t seem to be interested in conversation.” As if he had heard my thoughts, the man’s footsteps suddenly stopped. From behind us came a voice:<br/><br/>“Why don’t you ask me what I’m muttering about?”<br/><br/>Without pause, we replied:<br/><br/>“No.”<br/><br/>We had many miles to go, and had no time to get wrapped up in the words of highwaymen. The gray sun was beginning to set. But our response proved insufficient; we heard a squelch as the man limped back in our direction. I turned to face him. We stood in silence for a moment. To our collective dismay, he began to speak:<br/><br/>“I am a person of the mud. In my village, people breathe mud as fish breathe water. Our language is the language of mud. Because our language is the language of mud, there is no word for mud in our language. A mirror cannot reflect itself. However, I will not speak that language to you today. I will continue to speak to you using your own language, which I learned just now from the darting of your eyes. When I was muttering, I was muttering in the language of mud. Now that I speak, I speak in your language. But what I just said is false. There is only one language being spoken here, and I will explain why. Suppose that there are two distinct languages. We will call them Language 1 and Language 2. For these two languages to be truly distinct, they must be independent of one another. This seems like a simple requirement, but I will explain how unreasonable it really is. Independence implies separation on every level. This means that the phonetic and syntactic structures of the two languages must be totally dissimilar; indeed, their respective semantic sets cannot overlap. Meaning: no word in Language 1 has a semantic equivalent in Language 2, and vice versa. However, they are still not really separate. Someone who speaks Language 1 could use a word from Language 2 in order to describe something that lacks a definition in his own language, just as I used your word for ‘mud’ earlier. This is because, even though their contents are totally discrete, our languages share common symbols. It follows that we must further divide the languages with respect to expression. Let us say that Language 1 is only expressible through speech, while Language 2 is only expressible through writing. But this is still insufficient: it turns out that the speakers of Language 2 are creative, and decide to assign arbitrary symbols to the sounds that come from the mouths of the speakers of Language 1. The barriers have once again been broken, and the languages seep into one another. As long as the speakers can perceive the other language, this transference will continue. Therefore, we must impose a final, terrible stipulation upon our system: the speakers of Language 1 must be unable to discover the existence of Language 2 by any means, and the speakers of Language 2 likewise. No organ or instrument of science possessed by the speakers of Language 1 must be able to perceive the symbols of Language 2. If someone of Language 1 encounters an individual of Language 2, they will think him mute and illiterate. These conditions also apply to speakers of Language 2. For each speaker, the language of the other becomes a language of pure being. The only quality of the language of the other is that it has none, a quality it shares with non-being. So, for each speaker, the other language does not exist, and there is only one language: their own. Let us return to our first proposition concerning two distinct languages. I have shown that the notion of truly isolated languages is absurd, and will always collapse into a single language contra a language of non-being, i.e. a single language. However, you may be wondering: what about the actually existing languages of the world, which appear so different and multifarious? They may not be totally distinct, yet are still seemingly separate from one another. This is a valid query. Indeed, the notion of these ‘non-distinct languages’ (unlike the notion of ‘distinct languages’) is not absurd. It is just another way of describing a single language, and therefore fails to imply true plurality.”<br/><br/>During this monologue, the man had been standing about two feet in front of me. He kept extending a mud-encrusted hand forward to pilfer the heavy coins I keep in my pockets, a rote action which seemed totally divorced from any of the words coming out of his mouth. He moved so slowly that the motion of his hand was imperceptible, like that of a plant growing. Every time it came near, I swatted it away with great force, but this didn’t deter him: after shamefully returning his hand to its starting position, he would invariably start the entire process again.<br/><br/>“But why is the notion of ‘non-distinct languages’ misguided? I have already shown you, but I will reiterate: any apparent difference between non-distinct languages can be negated through translation. Translation is the unification of language. This is self-explanatory. Translation effectively creates a union of two languages based on similarities between their constituent words, syntax, or form (here, we understand ‘translation’ as encompassing not just the decryption of semantic meaning between two languages, but also the transformation of any linguistic quality in general). The languages are merged, apparently creating a new language with each language as a subset, but the very advent of this union promotes the homogeneity of the overall set and the dissolution of any distinction between these subsets. To keep these non-distinct languages separate would be impossible, as it would involve a regression of the movement of thought to a moment before the translation. Once the translation has been acknowledged, the difference between languages is overcome. We may assume this to be true for every known language, even those not yet translated: the mere possibility of translation is enough to dispel the illusion of difference. So, we arrive at a similar conclusion to the previous argument: there is no word that can be spoken by man that is not part of a single, absolute language.”<br/><br/>The man stopped talking. The sun had set, and the world had turned from gray to <a target="_blank" href="https://www.youtube.com/shorts/MoZvuZLBmt8">black</a>. Still, we waited with bated breath to see if he would begin again. After a few minutes, my companion asked:<br/><br/>“What were you muttering about?”<br/><br/>There was no reply. Although we could not see him in the darkness, we heard the squelch of the man’s boots as he limped away.
        </div>
    )
}

export function Movie() {
    return (
        <iframe src="https://www.youtube.com/embed/FQTc_Ppz8A4?si=XDJcflrdubVOuR9M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )
}

export function AlbumPaper() {
    const songs = [
        { name: "Paper", length: "00:18", link: "https://view3.bandcamp.com/track/paper"},
        { name: "Tell the Truth", length: "04:50", link: "https://view3.bandcamp.com/track/tell-the-truth"},
        { name: "Text", length: "03:30", link: "https://view3.bandcamp.com/track/text"},
        { name: "04/15/27", length: "03:43", link: "https://view3.bandcamp.com/track/4-15-27"},
        { name: "Magician", length: "00:11", link: "https://view3.bandcamp.com/track/magician"},
        { name: "Josephine", length: "03:38", link: "https://view3.bandcamp.com/track/josephine"},
        { name: "Your Turn to Be Me", length: "03:33", link: "https://view3.bandcamp.com/track/your-turn-to-be-me"},
    ]
    return (
        <div className="events-container">
            {songs.map((song, index) => (
                <div key={index} className="event">
                    <a href={song.link} target="_blank">{song.name}</a>
                    <div className="event-name">{song.length}</div>
                </div>
            ))}
        </div>
    )
}

export function Events({isPast}: {isPast: boolean}) {
    const events = [
        { name: "", date: "2026-03-06", location: "..."},
        { name: "", date: "2025-12-12", location: "blip"},
        { name: "Film screening", date: "2026-06-02", location: "blip"},
        { name: "", date: "2026-03-07", location: "Moondog Cafe"},
        { name: "", date: "2026-06-20", location: "Apple Computer"},
        { name: "", date: "2026-08-04", location: "State St. Pub"},
        { name: "", date: "2026-08-05", location: "Lambda"},
        { name: "", date: "2026-08-06", location: "318PGH"},
        { name: "", date: "2026-08-07", location: "Ulana's"},
        { name: "", date: "2026-08-08", location: "Future Space"},
        { name: "", date: "2026-08-10", location: "The High Dive"},
    ]

    const sorted = events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).filter(event => isPast ? new Date(event.date) < new Date() : new Date(event.date) >= new Date());
    const final = isPast ? sorted.reverse() : sorted;

    return (
        <div className="events-container">
            {final.map((event, index) => (
                <div key={index} className="event">
                    <div>{new Date(event.date).toLocaleDateString()}</div>
                    <div className="event-name">{event.location} {event.name && ` (${event.name})`}</div>
                </div>
            ))}
        </div>
    )
}

export function Email() {
    return (
        <div className="events-container">
            <div className="event">
                dust54089@gmail.com
            </div>
            <div  className="event">
                2755 W Augusta Blvd
                <br/>
                3F
                <br/>
                Chicago IL 60622
            </div>
        </div>
    );
}
