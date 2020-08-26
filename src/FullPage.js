import React from 'react';
import cover from "./data/Constitution cover cropped.png";
import top_cropped from "./data/top_cropped.png";
import bottom_text from "./data/bottom_text.png";
import './App.css';

function FullPage(props) {
  return (
      <div className={props.homeScreen ? 'home' : 'full'}>
        <div className="fullpage">
            <div className="inner">
                <div className={"intro-section-2"}>
                    <img className={"cover-image-2"} src={top_cropped}/>
                </div>
                <div className={"bottom-text-container"}>
                    <img className={"bottom-text-image"} src={bottom_text} />
                </div>
                <div className={"info"}>
                    <h2>Preamble</h2>
                    <p>We, the members of Tim Tebow for MVP, in order to form a bond and promote
                        a sense of comradery, do ordain and establish this constitution for the
                        governing of our hallowed league (currently in its 7th year). </p>

                    <h3>Article 1: Name</h3>
                    <p>The name of this league will be Tim Tebow for MVP, hereafter referred to
                        as TT4MVP</p>

                    <h3>Article 2: Purpose</h3>
                    <p>The purpose of this league is twofold. One objective is to unite the
                        men that make up the league by bringing us together in a common
                        purpose. Secondly, this league provides an outlet for our competitive
                        nature by allowing us to compete against one another in a friendly
                        competition.</p>

                    <h3>Article 3: Membership</h3>

                    <h4>Section 1: Founding Members</h4>
                    <p>First of all, shout out to Tony Heron, the commissioner of this hallowed
                        league. The first members of this league came from KP’s form class, with
                        the original league members being the following: Tony Heron, James
                        Cameron, John Darragh, Oran McCauley, Thomas Kane, and Tompey. How times
                        have changed. Nowadays, this is an international league, with members from
                        3-5 different countries participating, depending how you count. Membership
                        of this league includes the following benefits: a vote in the AGM,
                        ability to participate in league activities throughout the year and a
                        say in what new members join the league. Additionally, members can
                        advocate a change to the constitution.</p>

                    <h4>Section 2: New members</h4>
                    <p>For a new person to join the league and to achieve the coveted status
                        of member of TT4MVP, they must first come with a recommendation from one
                        of the current members. If 2 additional members accept this
                        recommendation, the committee will conduct an interview process. During
                        this process, the committee members can ask the candidate wishing to
                        join the league any question except for the following areas: anything
                        of a deep personal nature that may damage the wellbeing of the
                        individual, number of lynchings committed and whether they have a
                        foreskin or not. Outside of these areas, the candidate must answer
                        the question. However, the standard of the answer may not be debated
                        by committee members, and they must accept the answer given. After
                        this process is over, the committee will deliberate and come to a
                        conclusion of whether to grant the candidate membership within 4
                        working days. If the candidate is successful, there will be a
                        probation period of 3 months where the candidates actions will be
                        monitored by the committee. If the candidate is seen to be active
                        and is an eager beaver after 3 months, they will become a full
                        member of the league, with all the benefits that membership
                        brings.</p>

                    <h4>Section 3: Expulsion</h4>
                    <p>If a member is not active for a period of 2 seasons, they will be
                        expelled from the league with immediate effect. An expelled member may
                        issue an appeal, if they can receive backing in writing of 2 members. If
                        this is achieved, the committee will rigorously grill the expelled
                        members in an interview where no topic is off the table. Yes, this means
                        that you can ask if a member has a foreskin. The expelled member must
                        answer all questions asked, and the quality of their response can be
                        evaluated by the committee. If 2/3’s of the committee accept that the
                        expelled member is truly sorry, they can be reinstated. However, if they
                        don’t receive a 2/3 majority in the committee, the expelled member must
                        wait one full fantasy season before appealing again. If they fail on 3
                        appeals, they will be banished from the league forever.</p>

                    <h4>Section 4: Committee membership</h4>
                    <p>This role is only for members who are willing to be active throughout
                        the whole calendar year, not just a fantasy season. The committee will
                        be responsible for the day to day running of the league, minor changes
                        in the scoring system, and for disciplining members. There will be 4
                        members on this committee, with one of them being the commissioner.
                        The second position will be the Attorney General, who will be
                        responsible for interpreting the constitution. The third position will
                        be Gog, who will work with the Attorney General to assist with handing
                        out punishments that are specified within the constitution. Finally, the
                        fourth position will be the Chief Adjudicating Officer who will be
                        responsible for judging what changes should be made to the scoring
                        system. In order to maintain checks and balances, the committee is
                        allowed to review the actions taken by each individual on the
                        committee, and can reverse a decision based on a majority. However, in
                        the case of a tie, the decision will stand, in order to prevent all
                        decisions from a committee member being overruled.</p>

                    <h5>2019 Committee Members</h5>
                    <p>Commissioner: Tony Heron</p>
                    <p> Attorney General: Nygell Young</p>
                    <p> Gog: James Cameron</p>
                    <p>Chief Adjudicating Officer: John Darragh</p>

                    <h3>Article 4: Trades</h3>

                    <h4>Section 1: What constitutes a trade</h4>
                    <p>3 things must be present for a trade to exist. Firstly, there must be
                        a clear offer. This offer must be clear and certain, with the offer
                        being either written or verbal. Importantly, a rejected offer cannot
                        be accepted after it has been rejected. However, if the offer is made
                        again, it can then be accepted. Secondly, there must be a clear
                        acceptance. This acceptance may be written or verbal, but it must match
                        the original offer exactly, or the offer will be void. The acceptance
                        of the trade must also be received by the member offering the trade.
                        Finally, the third part of a trade is that consideration must be
                        given. Consideration is where one member gives up an item of value in
                        order to gain what is promised from the other member. Essentially, a
                        member has to give up something in order to receive a player. It is
                        important to note that the value of consideration is not considered.
                        This means that as long as consideration is given, a trade can
                        commence. However, it is important to note that firstly, due to
                        Article 5 Section 3, consideration must be in the form of a player.
                        Secondly, the value of consideration is only not considered during
                        the trade process. As per Article 5 Section 1, the committee can
                        review whether the consideration given in a trade is adequate.</p>

                    <h4>Section 2: Misrepresentation</h4>
                    <p>This really shouldn’t be an issue, but due to circumstances that have
                        occurred, it must be considered. As defined in a well-regarded book of
                        law, misrepresentation is a false statement of material face, made
                        innocently before a trade is made. Essentially, if a statement is made
                        under the belief that it is true, but no grounds are given for this
                        statement to be true, it will be negligent and void. For example, if
                        a member jokingly says yes to a clearly one-sided trade, and the other
                        party accepts this “offer,” it won’t stand as it is made for comedic
                        purposes. Should any potential issues arise, the members involved with
                        this should bring their case to the Attorney General, who will make a
                        decision based on the evidence submitted by both members. In the event
                        of the Attorney General being one of the members involved, the
                        Commissioner will fulfil the role of Attorney General for this
                        case.</p>

                    <h3>Article 5: Discipline</h3>

                    <h4>Section 1: Abuse of new members</h4>
                    <p>Without naming any members, some new members of the league have been
                        brutally abused by members, with the result of them being frisked of
                        good players. If a member believes another member is abusing a new
                        member, they may take a complaint to the committee. If the committee
                        deems that their complaint is a legitimate one, and not an attempt to
                        sabotage another member’s team, the committee will act as both judge
                        and jury for the parties involved. During this arranged court session,
                        both parties will plead their case to the committee, and can have up
                        to 3 witnesses. After hearing both sides, the committee must reach a
                        decision by the beginning of the next fantasy week. If the committee
                        decides there has been no offence, the member that brought the
                        complaint must write an apology letter to the accused party and may
                        receive a one-week trade ban (where no trades may be made or free
                        agents picked up). This is in place so members don’t complain lightly.
                        If the committee decides that the accused did indeed abuse the new
                        member, punishment will be handed down. Punishments may range from
                        dropping a random player from the team, an apology letter to the
                        abused member and a return of the player that was frisked or a trade
                        ban. If a member is found to have abused a member 3 times in a row,
                        the committee can decide on a suitable punishment for them. When
                        deciding on punishment, all activities that took place before the
                        writing of this constitution must not be considered. This will ensure
                        that fair judgement is given. A member that has received punishment
                        has 2 working days to appeal their punishment. However this appeal is
                        made to the commissioner, and, if the commissioner feels there is a
                        legitimate case, they can bring the case back to the committee.
                        Finally, there is no double jeopardy so, if a member is found not
                        guilty, they cannot be retried for the same offence. In the case of
                        the commissioner being the member who has received punishment, the
                        appeal must be made to the committee.</p>

                    <h4>Section 2: Player loans</h4>
                    <p>For those unaware, player loans have been occurring since around 2017. This is where 2 members agree to trade players on a week loan to help escaping the bye week curse</p>

                    <h4>Section 3: Player give away (the Burger Clause)</h4>
                    <p>At the end of the regular season, members have been giving away players to help other members in the playoffs. Under no circumstances can this be permitted. However, members can trade next year draft picks for players. If this occurs, evidence must be submitted to the committee by one of the members of the trade to ensure no dodgy dealing occurs at the next draft. Outside of draft picks, no item of value can be exchanged for players. This includes items such as money, sexual favours, or meat products. Indeed, this definition has been expanded to include any earthly possession or pleasures of the flesh. Any member found breaching this will be subject to the same punishment as outlined in the abuse of new members in Section 1.</p>

                    <h3>Article 6: Amending the Constitution</h3>

                    <p>If any members want to change/add/remove a section of the constitution, they must bring their idea to the AGM. If 2/3 of the members present agree to the change/addition/removal, then it can happen. If it doesn’t receive the blessing of the gathered members, the constitution will not be changed. </p>

                    <h3>Article 7: Annual General Meeting</h3>

                    <p>A fantasy year begins upon hearing the beloved words “your team is now on the clock.” In order to review the past fantasy year, an Annual General Meeting (AGM) will be held. During this meeting, a number of actions can happen. Headed by the commissioner (or delegated to committee members after the first year), the following itenary will occur:</p>
                    <p>- Opening Remarks </p>
                    <p>- Review of the Past Fantasy Year</p>
                    <p>- Team Proposals</p>
                    <p>- Constitutional Amendments</p>
                    <p>- Any Other Business</p>
                    <p>- Commissioners Address</p>

                    <h3>Article 8: General Clauses</h3>

                    <p>- Anyone that brags about stats on a level that Oran McCauley would be proud of is allowed to be punished by any way that the committee sees fit. Nothing life threatening</p>
                    <p>- Anyone that wins the league 5 years in a row legally owns everyone else’s dad</p>
                    <p>- Generally just be dead on</p>
                    <p>- If draft cake isn’t present at the draft, it isn’t an official draft</p>
                    <p>- It is illegal to ask Nygell Young about anything to do with his anatomy at league events</p>
                    <p>- The Foreskin Pact: If James wins the league before Nygell, he may ask about the structural integrity of Nygell’s male member. However, if Nygell wins the league before James, Nygell can prevent James from asking about whether he has a hood or not</p>
                    <p>- It is absolutely FORBIDDEN to ask your league manager (or commissioner) to upgrade your experience now</p>
                    <p>- Animal abuse is outlawed, which includes but is not limited to cat lynching</p>

                    <h2>Amendments</h2>

                    <h3>Amendment 1</h3>
                    <p>After the 2016 AGM (the first of many), it was decided by a vote of 4 - 3 that player loans are now Illegal, and, if found guilty of loaning a player, members are subject to punishments outlined in Article 4, Section 1. (2016 A.D.)</p>

                    <h3>Amendment 2</h3>
                    <p>In times of constitutional crisis, the committee will be granted temporary emergency powers to resolve the crisis. This was decided by a vote of 8-0. These powers will only last for 20 working days, after which the committee must ask the league for an extension. Emergency powers will include but is not limited to expelling members and adding temporary members. In times of war, Gog takes control of the league, God help us all. War is defined as any time one of our members is drafted/sent to an active warzone or when Montenegro declares war on any sovereign nation. (2019 A.D.)</p>

                    <h3>Amendment 3</h3>
                    <p>Appreciation must be given to those members who used to sit in eager anticipation of the 2.pm BST release of free agents. Their commitment is to be commended and admired. However, as of the 2019 AGM, waivers have now been introduced in a vote of 5-3.</p>
                </div>
            </div>
        </div>
      </div>
  );
}

export default FullPage;
