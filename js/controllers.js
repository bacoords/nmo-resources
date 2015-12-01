angular.module('starter.controllers', [])


.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {



})

.factory('FaqsFactory', function() {

  var faqs = [
            { id: 1, title : 'What is NMO?', content : 'NMO stands for neuromyelitis optica, originally known as Devic’s Disease. NMO is currently an incurable but treatable autoimmune disorder. The body’s immune system attacks its own healthy cells, most commonly in the optic nerves and spinal cord. It can cause temporary or permanent blindness and/or paralysis, and may have periods of remission and relapse.' },
           { id: 2, title : 'What causes NMO?', content : 'At present, the specific cause(s) of NMO are unknown. However, most experts believe that NMO results from a dysfunction in immune tolerance, which is the immune system’s ability to distinguish one’s own cells or proteins from potentially foreign materials.' , video: "http://www.youtube.com/embed/SewcOjEz0Ss?showinfo=0&amp;rel=0" },
           { id: 3, title : 'How common is NMO?', content : 'Based on recent epidemiologic reports, there are an estimated 4,000 cases in the United States and a half million worldwide. As with many autoimmune conditions, females are affected by the disease more commonly than males, at an approximate ratio of 6:1. NMO can affect both children and adults.', video : 'http://www.youtube.com/embed/PS9ZiYOdnxk?showinfo=0&amp;rel=0' },
           { id: 4, title : ' How frequent are NMO relapses (also called attacks) ?', content : 'The time interval between relapses or attacks can range from days, weeks, months or even years apart. Some cases have been known to have attacks 15 years apart. In some patients there is only one episode (no relapses), but such cases are relatively uncommon.', video : 'http://www.youtube.com/embed/UP1lXFZC-0E?showinfo=0&amp;rel=0' },
           { id: 5, title : 'What are NMO symptoms?', content : 'NMO symptoms can vary from person to person and may resemble MS symptoms in many ways. NMO is most commonly characterized by inflammation of the spinal cord and/or optic nerves, causing any one or more of the following symptoms:\n- Rapid onset of eye pain or loss of vision (optic neuritis).\n- Limb weakness, numbness, or partial paralysis (transverse myelitis).\n- Shooting pain or tingling in the neck, back or abdomen.\n- Loss of bowel and bladder control.\n- Prolonged nausea, vomiting or hiccups.\nSometimes these symptoms are temporary, and resolve on their own. In any case, it is important to discuss these symptoms with your doctor to help consider NMO in your diagnosis.', video : 'http://www.youtube.com/embed/bsdpAtQf8Kg?showinfo=0&amp;rel=0' },
           { id: 6, title : 'How is NMO diagnosed?', content : 'There are currently several methods that can be utilized alone or together to diagnose NMO:\n- Specific laboratory tests that detect hallmark NMO IgG antibody (simple blood test).\n- Magnetic resonance imaging (MRI) to check for spinal cord lesions.\n- Ophthalmology studies such as optical coherence tomography (OTC) to check for telltale damage to the optic nerve or retina.\n- Tests to rule out other closely related disorders such as multiple sclerosis.', video : 'http://www.youtube.com/embed/cMDCGMytlE8?showinfo=0&amp;rel=0' },
           { id: 7, title : ' Is the NMO IgG antibody test foolproof?', content : 'No. Most NMO IgG tests list a 5-10% chance of a false-positive result, or a 20-30% chance of false negative result. The most commonly used laboratory test for NMO antibody was created in 2000 at the Mayo Clinic.', video : 'http://www.youtube.com/embed/rt-dMF3QkQw?showinfo=0&amp;rel=0' },
           { id: 8, title : ' How do I get the NMO IgG antibody test?', content : 'Your primary care physician or neurologist can order the NMO IgG antibody test.', video : 'http://www.youtube.com/embed/xXuXJu571oM?showinfo=0&amp;rel=0' },
           { id: 9, title : ' How can I help my primary care physician to consult with an NMO specialist?', content : 'The GJCF “Connect the Docs” webpage provides contact information for neurologists and other clinicians in the U.S. and throughout the world who specialize in diagnosing and treating NMO. ', video : 'http://www.youtube.com/embed/Gk3BOGe6WVs?showinfo=0&amp;rel=0' },
           { id: 10, title : 'My primary care physician has never heard of NMO. Does this make him/her a bad clinician?', content : 'No. Many clinicians and neurologists have never seen an NMO patient and are not aware of this rare disease.', video : 'http://www.youtube.com/embed/btWVUKT6VFc?showinfo=0&amp;rel=0' },
           { id: 11, title : 'Is there a possibility that NMO may be misdiagnosed as Multiple Sclerosis (MS)?', content : 'Yes. NMO is sometimes misdiagnosed as MS. The treatments for these distinct conditions can be very different, and recent reports suggest that some agents used to treat MS may be ineffective in NMO or actually make NMO symptoms worse.', video : 'http://www.youtube.com/embed/2EZvpyqPcy8?showinfo=0&amp;rel=0' },
           { id: 12, title : 'Is NMO a form of Multiple Sclerosis (MS)?', content : 'Until recently, NMO was thought to be a type of Multiple Sclerosis. However, recent discoveries indicate that NMO and MS are distinct diseases. With so many symptoms in common, NMO can sometimes be confused with MS or other diseases. But these diseases are treated in different ways and early detection and treatment help ensure best outcomes. For these reasons, it is important to seek clinical care as soon as possible if symptoms occur.', video : 'http://www.youtube.com/embed/ek__omkNgjg?showinfo=0&amp;rel=0' },
           { id: 13, title : 'How do clinicians treat NMO?', content : 'At present, treatment of NMO is targeted at two facets of the disease:\n 1. Control tissue inflammation and damage at onset or during relapse\n 2. Prevent further tissue damage by reducing the frequency of relapse.', video : 'http://www.youtube.com/embed/Qd-EuQ_huiU?showinfo=0&amp;rel=0' },
           { id: 14, title : 'What are the treatments for NMO relapses?', content : 'Acute NMO relapses or attacks are often treated with:\n- Corticosteroids (steroid treatment)\n- Plasmapheresis (the removal of antibodies from the blood stream)\nPlasmapheresis is often used if steroid treatment is ineffective. Some clinicians use plasmapheresis on a limited scale in cases where patients show poor tolerance for other agents used to prevent relapses.' },
           { id: 15, title : 'How are NMO attacks prevented?', content : 'The most common immunosuppressive agents used by NMO specialists to prevent NMO attacks include:\n- Azathioprine (trade name, Immuran; oral)\n- Mycophenolate (trade name, CellCept; oral)\n- Rituximab (trade name, Rituxan; intravenous infusion)\nRelapse prevention medications can be very helpful but may not be 100% effective.' },
           { id: 16, title : 'Do clinicians prefer one drug treatment over another?', content : 'As with many aspects of medicine, neurologists including NMO specialists may have certain preferences for one treatment regimen over another. Selection of a treatment regimen depends on many individual factors such as symptoms, disease severity, whether the treatment is well-tolerated, cost, and other factors.', video : 'http://www.youtube.com/embed/sg1-a7CWmUg' },
           { id: 17, title : 'Do these treatments have dangerous side effects?', content : 'As with the treatment of any disease, certain NMO treatments can have side effects, including serious adverse events such as infection. However, recent reports suggest that treatment efficacy is improving, and the benefits far outweigh the negative side effects in preventing or resolving severe attacks. It is always best to consult with your physician and/or an NMO specialist to determine which treatment regimen may be best for you.', video : 'http://www.youtube.com/embed/HJGpTSJBo28?showinfo=0&amp;rel=0' },
           { id: 18, title : 'If taking immunosuppressive therapy, is it OK to take over-the-counter herbal remedies and/or vitamin supplements?', content : 'It is always best to consult with your physician and/or an NMO specialist regarding over-the-counter herbal remedies and/or vitamin supplements in relation to your NMO treatment regimen.' },
           { id: 19, title : 'What are key points to keep in mind if I am taking immunosuppressive therapy?', content : 'All immunosuppressive therapies reduce the ability of your immune system to fight against infection and cancer. In addition, wound healing may be slower, and dental health compromised. Preventative exams such as mammograms, pap smears, dermatology full-body exams, and dental hygiene should be done regularly. It is also important to pay attention to public health hygiene by considering the basic rules of protecting yourself against transmissible diseases:\n- Wash your hands regularly and thoroughly with soap and water\n- Avoid touching your eyes, nose, mouth, or face\n- Avoid interacting with people who may be sick, coughing or sneezing\n- If you feel a cold or fever coming on, consult your physician immediately', video : 'http://www.youtube.com/embed/fSsWj8QiNs8?showinfo=0&amp;rel=0' },
           { id: 20, title : 'How broken is my immune system if I have NMO?', content : 'The immune system is one of the most powerful yet mysterious of all the systems in the human body. Intensive research is being conducted to understand the specific causes of NMO, identify new and more effective treatments that prevent relapses, and ultimately find ways to reset the immune system with the intention to solve NMO. It may even be possible to use the immune system itself to do so.', video : 'http://www.youtube.com/embed/N601-kOsKjY?showinfo=0&amp;rel=0' },
           { id: 21, title : 'Can tissues injured by NMO be repaired?', content : 'It is not known if the body can heal damage to the spinal cord, optic nerves or brain caused by NMO. It is possible that by preventing relapses, these tissues may repair themselves over time. However, it is also possible that tissue caused by NMO may be irreversible. Ongoing studies are being conducted to find ways to repair tissue damaged by NMO.', video : 'http://www.youtube.com/embed/UeR6YwY_cRs?showinfo=0&amp;rel=0' },
           { id: 22, title : 'I haven’t had an NMO attack or flare-up for a long time, can I stop taking my medication or decrease its dosage?', content : 'Because NMO can stay in remission for long periods of time, even years, it is important to consult with your physician and/or an NMO specialist to determine ongoing therapy.' },
           { id: 23, title : 'Should NMO patients receive standard vaccinations against infectious diseases?', content : 'Vaccinations are not known to cause NMO, and the benefits of immunization to protect against infection far outweigh risks. However, certain vaccines may not be advisable in the setting of specific types of immunosuppressive therapy. It is always best to consult with your physician and/or an NMO specialist to determine the best vaccine schedule in your case.', video : 'http://www.youtube.com/embed/0AqLwjVK2yM?showinfo=0&amp;rel=0' },
           { id: 24, title : 'Are there specific agents approved by the Food and Drug Administration (FDA) to treat NMO?', content : 'No, at this time there is no NMO-specific therapy. Agents used to treat NMO are approved to treat conditions other than NMO, but may be recommended by a neurologist or NMO specialist for use in treating NMO.' },
           { id: 25, title : 'What are B cells and why are they important?', content : 'B cells are a special type of white blood cell that produces antibody. Because the NMO-IgG antibody is believed to play a role in causing NMO disease or relapse, B cells that make NMO-IgG are considered targets for NMO therapy. For example, rituximab targets and eliminates certain types of B cells that may produce NMO-IgG antibody. B cell monitoring is often used for patients after receiving rituximab infusions, which are often four-to-six months apart.', video : 'http://www.youtube.com/embed/Oo9YrqQrXMA' },
           { id: 26, title : 'Can I get Stem-Cell treatment for NMO?', content : 'At the present time, the effectiveness of stem cell therapies for NMO is unknown. Consult with your physician and/or an NMO specialist.', video : 'http://www.youtube.com/embed/nRsmUU7x0rg' },
           { id: 27, title : 'Does one-step or monophasic NMO exist?', content : 'Usually NMO occurs as a series of episodes or relapses. However, in approximately 10% of patients, it appears that a form of monophasic NMO exists. These patients may suffer from an acute episode of optic neuritis in one or both eyes, and have other hallmark signs such as transverse myelitis, but have no relapses. However, it is difficult to tell if such patients are in a long remission period, or have the monophasic form of disease, so drug treatment is usually continued.', video : 'http://www.youtube.com/embed/UP1lXFZC-0E?showinfo=0&amp;rel=0' },
           { id: 28, title : 'What is transverse myelitis?', content : 'Transverse myelitis is a medical term describing a condition in which inflammation is seen by MRI or other imaging methods to affect a section of the spinal cord. Inflammation can damage or destroy spinal cord, optic nerve, or brain tissue, including the protein insulation (myelin) that covers nerve cells.' },
           { id: 29, title : 'What is optic neuritis?', content : 'Optic neuritis is caused by damage to the optic nerve due to acute or chronic inflammation. The optic nerve carries visual information from the eye to the brain. Inflammation of the optic nerve can cause damage to the myelin sheath covering it. Optic neuritis may occur in the form of loss of color vision, reduced visual field, and other symptoms. Optic neuritis is a serious condition that can lead to progressive vision loss or even blindness. Minimizing or preventing damage to the optic nerve is one of the primary reasons to seek medical care immediately if symptoms of optic neuritis occur or relapse.', video : 'http://www.youtube.com/embed/4Nw464s6-I4?showinfo=0&amp;rel=0' }
    ]

  return {
    all: function() {
      return faqs;
    },
    remove: function(faq) {
      faqs.splice(faqs.indexOf(faq), 1);
    },
    get: function(faqId) {
      for (var i = 0; i < faqs.length; i++) {
        if (faqs[i].id === parseInt(faqId)) {
          return faqs[i];
        }
      }
      return null;
    }
  };
})

.controller('FaqsCtrl', function($scope, FaqsFactory){
    $scope.faqs = FaqsFactory.all();
   if(typeof analytics !== 'undefined') { analytics.trackView("ABout NMO FAQs View"); }
})

.controller('FaqCtrl', function($scope, $sce, $stateParams, FaqsFactory){
    $scope.faq = FaqsFactory.get($stateParams.faqid);
    if ($scope.faq.video){
        $scope.videourl = $sce.trustAsResourceUrl($scope.faq.video);
    }
})

.factory('AboFactory', function() {

  var abo = [
            { id: 1, title : 'Definition', content : 'Neuromyelitis optica (NMO) is an uncommon disease syndrome of the central nervous system (CNS) that affects the optic nerves and spinal cord. Individuals with NMO develop optic neuritis, which causes pain in the eye and vision loss, and transverse myelitis, which causes weakness, numbness, and sometimes paralysis of the arms and legs, along with sensory disturbances and loss of bladder and bowel control. NMO leads to loss of myelin, which is a fatty substance that surrounds nerve fibers and helps nerve signals move from cell to cell. The syndrome can also damage nerve fibers and leave areas of broken-down tissue. In the disease process of NMO, for reasons that aren’t yet clear, immune system cells and antibodies attack and destroy myelin cells in the optic nerves and the spinal cord.' },
           { id: 2, title : 'Basic Information', content : 'Historically, NMO was diagnosed in patients who experienced a rapid onset of blindness in one or both eyes, followed within days or weeks by varying degrees of paralysis in the arms and legs. In most cases, however, the interval between optic neuritis and transverse myelitis is significantly longer, sometimes as long as several years. After the initial attack, NMO follows an unpredictable course. Most individuals with the syndrome experience clusters of attacks months or years apart, followed by partial recovery during periods of remission. \n\n\n\nThis relapsing form of NMO primarily affects women. The female to male ratio is greater than 4:1. Another form of NMO, in which an individual only has a single, severe attack extending over a month or two, is most likely a distinct disease that affects men and women with equal frequency. The onset of NMO varies from childhood to adulthood, with two peaks, one in childhood and the other in adults in their 40s.' },
           { id: 3, title : 'Historical Views on NMO', content : 'In the past, NMO was considered to be a severe variant of multiple sclerosis (MS) because both can cause attacks of optic neuritis and myelitis. Recent discoveries, however, suggest it is a separate disease. NMO is different from MS in the severity of its attacks and its tendency to solely strike the optic nerves and spinal cord at the beginning of the disease. Symptoms outside of the optic nerves and spinal cord are rare, although certain symptoms, including uncontrollable vomiting and hiccups, are now recognized as relatively specific symptoms of NMO that are due to brainstem involvement.\n\n\nThe recent discovery of an antibody in the blood of individuals with NMO gives doctors a reliable biomarker to distinguish NMO from MS. The antibody, known as NMO-IgG, seems to be present in about 70 percent of those with NMO and is not found in people with MS or other similar conditions.' },
           { id: 4, title : 'Is there any treatment?', content : 'There is no cure for NMO, but there are therapies to treat an attack while it is happening, to reduce symptoms, and to prevent relapses. Doctors usually treat an initial attack of NMO with a combination of a corticosteroid drug (methylprednisolone) to stop the attack, and an immunosuppressive drug (azathioprine) for prevention of subsequent attacks. If frequent relapses occur, some individuals may need to continue a low dose of steroids for longer periods.\n\n\nPlasma exchange (plasmapheresis) is a technique that separates antibodies out of the blood stream and is used with people who are unresponsive to corticosteroid therapy. Pain, stiffness, muscle spasms, and bladder and bowel control problems can be managed with the appropriate medications and therapies.\n\n\nIndividuals with major disability will require the combined efforts of occupational therapists, physiotherapists, and social services professionals to address their complex rehabilitation needs.' },
           { id: 5, title : 'References', content : 'Office of Communications and Public Liaison National Institute of Neurological Disorders and Stroke National Institutes of Health Bethesda, MD 20892\n\n\nNINDS health-related material is provided for information purposes only and does not necessarily represent endorsement by or an official position of the National Institute of Neurological Disorders and Stroke or any other Federal agency. Advice on the treatment or care of an individual patient should be obtained through consultation with a physician who has examined that patient or is familiar with that patient’s medical history.\n\n\nExcerpts taken from: NINDS Neuromyelitis Optica Information Page.' }
    ]

  return {
    all: function() {
      return abo;
    },
    remove: function(abo) {
      abo.splice(abos.indexOf(abo), 1);
    },
    get: function(aboId) {
      for (var i = 0; i < abo.length; i++) {
        if (abo[i].id === parseInt(aboId)) {
          return abo[i];
        }
      }
      return null;
    }
  };
})

.controller('AbosCtrl', function($scope, AboFactory){
    $scope.abos = AboFactory.all();
})

.controller('AboCtrl', function($scope, $sce, $stateParams, AboFactory){
    $scope.abo = AboFactory.get($stateParams.aboid);
//    if ($scope.abo.video){
//        $scope.videourl = $sce.trustAsResourceUrl($scope.abo.video);
//    }
//   if(typeof analytics !== 'undefined') { analytics.trackView("ABout NMO Singles View"); }
})

.factory('CTWFactory', function() {

  var ctw = [
            { id: 1, title : 'Alexion Pharmaceuticals : NMO Clinical Trial Update', content : '<P><strong>Jacinta Behne:</strong> Good morning and welcome to our educational webinar this morning.</P><P>This is the first of The Guthy-Jackson Charitable Foundation webinar series focused on clinical trials NMO. I am Jacinta Behne and I am sure to welcome you from the foundation. Today seminar is brought to us by <strong>Alexion</a> focusing on this PREVENT study and with that I will turn it over to our moderator today Dr. Michael Yeaman.</P><P><strong>Michael Yeaman:</strong> Thank you Jacinta, and we welcome all attendees from around the world to this educational webinar. We look forward to a very interesting and informative session.</P><P>The format for this series of webinars, is summarized on this slide. Session is 45 min in length comprising of 4 parts: The welcome, the introduction, the presentation and then the question and answer period. Attendees are welcome to submit questions in the Q&amp;A window on line. Please be as succinct as possible when submitting your question. After the presentation is complete the presenters and panelists will address as many questions as time permits. We thank you for understanding that not all the questions may be possible to be addressed simply because of time limits.</P><P>However the webinar slides and audio will be posted on the Foundation website for future viewing.</P><P>We are very fortunate to have esteemed colleagues with us today. Presenting will be Dr. Richard Riese, global medical science neurology lead at Alexion Pharmaceuticals.</P><P>Our panelist today is <strong>Dr. Brian Weinshenker</strong> expert NMO clinician at the Mayo Clinic. My name is Michael Yeaman I am at UCLA and an advisor to The Guthy-Jackson Charitable Foundation. I am happy to serve as the moderator for this webinar.</P><p>As a friendly reminder we appreciate that all attendees understand that the content in the presentation is solely that of the respective industry or its representative. Presenters are afforded a maximum of twenty minutes total time for the presentation. Questions and answers are then afforded up to 20 minute time for the remainder of the webinar. Please note that webinar is being recorded for the purposes of a future distribution. All perspectives are offered only for stakeholders and self-education and we also appreciate that the attendees understand that The Guthy-Jackson Charitable Foundation does not perform clinical trials nor does it endorse any particular clinical trial design or drug.</P><P>With that brief introduction we would now like to turn the talk to Dr. Richard Riese and ask that he begin his presentation.</P><P><strong>Richard Riese:</strong> Good morning. My name is Richard Riese and I am a medical doctor working on the Alexion NMO clinical development team. It is a pleasure to be with you this morning. I would like to thank the Guthy Jackson Charitable Foundation for this opportunity to discuss the PREVENT study with you. PREVENT stands for Prevention of Relapses and Evaluation of Eculizumab in Neuromyelitis Optica Treatment.</P><P>The goal of the PREVENT trial is to study the ability of a medication called eculizumab to prevent relapses of neuromyelitis optica – NMO and NMO spectrum disorder.</P><P>Eculizumab is an antibody protein that blocks the immune system’s attacks on healthy cells, which may prevent relapses.</P><P>The way that eculizumab acts to block the immune system’s attack, by blocking the chain of reaction before healthy cells are destroyed, is unique among NMO treatments, including potential treatments currently in other clinical trials.</P><P>Eculizumab is not currently approved for the treatment of NMO, but has been approved to treat two other rare diseases in some countries.</P><P>In a phase 2 study, eculizumab has been previously tested in 14 relapsing NMO patients. In this study, 12 of the 14 patients did not relapse for the year they were treated with eculizumab, while 2 patients had possible attacks: one patient with blurred vision with no change in visual acuity score; and another patient with back pain with no new findings on neurologic examination.</P><P>The goal of the PREVENT Study is to study the safety and potential benefit of eculizumab in a larger group of NMO patients, confirming the results of the phase 2 study. In the PREVENT study we will recruit up to 132 patients in 20 countries around the world, including NMO patients in United States.</P><P>To participate in the PREVENT trial you must be: (1) an adult, 18 years or older; (2) be diagnosed with NMO or NMO spectrum disorder; and (3) have a positive NMO antibody test for aquaporin-4 antibody. In addition, you must have experienced at least two relapses within last 12 months, or three relapses in past two years with at least one in the past year. You may be excluded from this trial if you were taking rituximab for the last three months, or intravenous immunoglobulin for the past three weeks. If you eligible and you choose to participate in this study, you will be randomly assigned to receive either eculizumab in an IV infusion, or an IV infusion without active medication, called placebo. Two out of three patients will receive eculizumab and one of three patients will receive placebo. The study doctors, nurses and coordinators will not know whether you are receiving eculizumab or a placebo, thestudy is blinded. Since this is an add-on study, you will be able to continue with your other NMO medications. You also will be eligible to participate in a follow up study, in which all patients will receive the same drug, eculizumab.</P><P>You should discuss with your doctor whether this study is right for you. If you decide to participate, your doctor and the study doctors will determine if you are eligible for the study. You will undergo blood tests, neurologic examination, and physical exam to determine if you are eligible. This will take approximately one to three weeks. If you are eligible for this study, you will receive either eculizumab or placebo, both by IV infusion every week for the first 5 weeks, and then every two weeks thereafter. You could be treated for up to 2 years in the study. If you have a relapse, your doctor will treat you. This study will end for you, but you will be monitored during the treatment of the relapse for an additional 6 weeks. Afterwards, you may be eligible to participate in another study, the extension study, where all patients will receive the same drug eculizumab. The follow up study could last up to 4 years.</P><P>Like all medications, eculizumab has risks and side effects. The safety of eculizumab has been studied over 10 years in two rare diseases: <strong>Paroxysmal Nocturnal Hemoglobinuria (PNH)</strong>, a rare red blood cell disease, and <strong>Atypical Hemolytic Uremic Syndrome (aHUS)</strong>, a rare genetic disorder associated with abnormal clotting in the blood vessels of the kidney. The most frequent side effects that occurred in the phase 2 NMO study included headache, nausea, dizziness, coughing, diarrhea, abdominal pain and rash. Patients taking eculizumab are at increased risk of meningococcal infections that can involve the blood stream - called sepsis - or the lining of the brain - called meningitis. One patient in the phase 2 NMO study developed meningococcal sepsis and sterile meningitis. She made a full recovery on antibiotic therapy. All patients who enroll in this study are required to receive a vaccine against this bacterium.</P><P>In summary, Eculizumab has been studied in a previous phase 2 trial in patients with relapsing NMO. Patients who enrolled in PREVENT will have 2 to 1 chance of receiving eculizumab versus placebo. This study is add-on design, so patients will be able to continue with other NMO therapy. The primary outcome in this study is the time to relapse in patients treated with eculizumab versus placebo. PREVENT will enroll up to 132 patients and last up to two years.</P><P>We are currently in the process of developing patient education materials about clinical trials for NMO, and need your help. Please note that The Guthy-Jackson Charitable Foundation has no role in the preparation of these materials. Thank you.</P><P><strong>Michael Yeaman:</strong> Thank you very much Richard and we’d now like to enter the question and answer portion of the webinar.</P><P>As a reminder we encourage Dr. Riese and Dr. Weinshenker to please offer a succinct responses as you can in the interest of addressing as many questions as time permits.</P><P>Dr. Riese, common question that maybe we could start off with has to do with cost, and maybe you could comment on how Alexion might help support the subject and or their caregiver with the respect to cost that might be incurred in participation in this trial.</P><P><strong>RR:</strong> Yes, we know that if you participate in the PREVENT trial you may need to travel much further and more often than you would to visit your local hospital. If you do incur these costs you may be reimbursed for these as part of the clinical trial participation. The study doctor will be able to provide you with more information on this.</P><P><strong>MY:</strong> And Richard could you just expand a little bit on the how often the subject might need to visit the clinic and what might be done at each visit.</P><P><strong>RR:</strong> For this study you will be visiting the clinic for the screening visit, and if you are eligible for the study, you will receive a vaccine against meningococcus bacterium and will return one to three weeks later for the first study visit. You will then return weekly for the first 5 weeks and then every other week for the remainder of the study. On all study visits you will receive an IV infusion of either eculizumab or placebo, and your doctor will ask you about side effects and any changes in your medications. At some study visits you will undergo additional examinations, including a neurological examination and blood work, and you will be asked to fill out questionnaires or surveys designed to assess how you are doing and feeling.</P><P><strong>MY:</strong> Richard, thank you very much. And now one other question along these lines and then we will ask Dr. Weinshenker to comment. Richard will the subject’s personal doctor be the one treating them in the clinical trial or will there be a special study doctor involved?</P><P><strong>RR:</strong> No, your doctor, your personal doctor will not be treating you in a clinical trial. There will be a specialized clinical trial doctor who has undergone rigorous and extensive training on the protocol and procedures, how to monitor safety of clinical trial participants and how to give the study medication. During the trial you should continue to see your personal doctor also. It is really important that the study doctor and your personal doctor communicate and work closely together while you participate in clinical trial.</P><P><strong>MY:</strong> Thank you very much Richard and now we would like to ask Dr. Weinshenker to comment on a question that we see often from the attendees. Brian, what kind of questions would you suggest a patient ask their doctor with regard to consideration of this clinical trial.</P><P><strong>BW:</strong> Thank you Michael, there are two key issues that I see that the patients should focus on. First is what are the risks of participation and there are two subheadings: first is the risk of the experimental agents and we’ve heard a bit about that from Dr. Riese and the second issues are the risks that I might experience as a result my disease activity. And we’ve heard that in this study patients will be allowed to continue their background NMO therapy so there will be no patients who are required to be exposed to placebo only. All patients who continue on their background NMO therapy in this study will have some protection, so I think that, at least for this study, removes that particular risk. And of course the next question is what are the benefits of participation? And certainly there are benefits to the entire NMO community. By conducting these studies, we will hopefully grow to a day when there are approved agents for this condition and this will be a benefit to the individual participant but also to the entire NMO community. But patients will certainly want to consider what are the potential benefits for me and we’ve heard that this study there’s been a pilot study that’s been conducted in patients with neuromyelitis optica. It is not definitive but patients may wish to take into account the results that have been reported for that study in deciding whether to participate. And then another question in general is whether this agent is approved for other conditions and has been experience in other conditions. We’ve heard that although the other conditions for which this treatment are approved is rare this is not a situation where this is the first in human it’s been studies. There are patients who are receiving this and patients may wish to research that when making their decision.</P><P><strong>MY:</strong> Brian, thank you very much and now we would like to continue along this line a little bit and ask Dr. Riese. Why are relapses required for the clinical trial to be most informative?</P><P><strong>RR:</strong> Thanks Michael. It is recognized that relapses are really an important clinical event for patients with NMO. In preventing relapses we can improve outcomes and quality of life for NMO patients. It also reduces the need for the intense treatments for the attacks and reduces hospitalizations. The scientific NMO community as well as the FDA believe that this is the best outcome to measure a good effect in a clinical trial, in a clinical trial setting. That being said, the PREVENT trial also measures other efficacy outcomes such as changes in the neurological exam and quality of life measures, as well as important safety measures to assess how well eculizumab works in NMO.</P><P><strong>MY:</strong> Richard, thank you very much and Brian would you like to comment?</P><P><strong>BW:</strong> Sure. As Richard said, relapses are the most direct measure of… what we’re hoping to accomplish in this study – that is to reduce the number of relapses and significant evidence would suggest that in NMO if we can prevent relapses we can also prevent some of the long term disability which in NMO is really the result of cumulative accumulation of disabilities that result from relapses. So that’s certainly the most direct measure. Now of course we’d ideally like to have a situation where we did not need to have a single patient experiencing a relapse in order to get the answers that we are looking for. And every effort is put in designing to make sure that the minimum number of relapses will be observed in a clinical trial in order to provide definitive information. And in this study in particular, a lot of emphasis is being put not only on recording minimum number of relapses but trying to reduce the risk to an individual patient experiencing relapse, which was basis of this add-on design where patients are allowed to stay on a baseline background treatments to not only reduce the total number of relapses recorded but also the risks to the individual patient.</P><P><strong>MY:</strong> Brian, Thank you very much and just to continue a little bit further on this line of interest we’d like you Brian to comment and then we’ll come back to Dr. Riese on the question what happens if a patient experiences a relapse generally. Brian, how would you approach that?</P><P><strong>BW:</strong> The first thing is to be sure that the symptoms do represent a relapse and in neuromyelitis optica the main one is that we’d expect symptoms that are already indicate optic neuritis or an inflammation of the optic nerves. That would be symptoms like eye pain or blurred or in some cases severe impairment to vision. Typically in one eye but it could be in both eyes and the other major symptom is spinal cord inflammation which could lead to combination of leg weakness, numbness and bladder and bowel dysfunction. One can also occasionally see uncommon relapses that could affect the brain for example nausea, vomiting and hiccups. But those are generally less common then the optic neuritis and myelitis symptoms that I referred to. So the first thing that a physician would want to do is make sure that the symptoms are appropriate and an examination is done to be sure that the findings are unequivocal and that’s going to be a key thing that regulators are going to look for: do you have definitive information that this was an attack? And after that is the case then treatment will be very prompt and it typically will involve the intravenous corticosteroids like methylprednisolone or Soli Medrol those are two names for the same agent given over typically five days. And if the patient does not have a very good response a typical rescue treatment is used is plasma exchange although other treatments like IVIG could be used and these treatments would be allowed in this study. And patients would receive relapses just as if they were not in this study. There will be no limitation on treatment as result of participating in this study.</P><P><strong>MY:</strong> Brian, thank you very much. And now Richard if you would like to comment on how the Alexion trial might particularly focus on minimizing any harm that might come if a relapse occurs.</P><P><strong>RR:</strong> Sure, as Dr. Weinshenker said, the most important thing is if you develop any signs or symptoms that might indicate relapse, that you contact study doctor as soon as possible. And this should include at night or on weekends, or during holidays. Every effort should be made to be evaluated by your study doctor within 24 and certainly not later than 48 hours. And again, even during the weekends. If you are not sure the symptoms you are experiencing represent a relapse, it is important you contact the study doctor anyway to make sure you are evaluated promptly. Your study doctor will examine you, and provide you with the treatment that he or she thinks is best for you. If you do have a relapse, as determined by your study doctor, your doctor will treat you promptly. The study, the PREVENT study will end for you, but you will be monitored during treatment of the relapse for additional 6 weeks. Afterwards you may be eligible to continue in another study – the extension study - where all patients will receive eculizumab. This is an open-label study where everybody will receive the active drug, eculizumab. This study can last up to four years.</P><P><strong>MY:</strong> Richard thank you very much. And now maybe we could address few other types of questions from the attendees. One of those has to do with the scope of the trial. Richard? From what countries around the world might be a subject be able to participate in this clinical trial.</P><P><strong>RR:</strong> Yes, it is a global study and it is being conducted at many sites around the world, including the United States, but also in other countries in North America, South America, Europe and Asia.</P><P><strong>MY:</strong> Richard we’ve heard about the way the trial will be conducted, how often the visits will occur. We do get questions asking what happens after completion of the clinical trial both in terms of future follow-up and perhaps learning about the results of the study.</P><P><strong>RR:</strong> Each patient will continue in the PREVENT trial until they have a relapse, or the study is completed as a whole. After completion of the trial, e patients may be eligible to continue in the extension trial and receive the active drug eculizumab. Once the trial is complete, and we are able to analyze the results, it is our intent to apply for market approval from regulatory agencies throughout the world, so that NMO patients have access to eculizumab. One question is how patients will know about the trial results. We will be posting the clinical trial results on clinicaltrails.gov once we have a chance to analyze the results. These results will be made available through ClinicalTrials.gov.</P><P><strong>MY:</strong> Thank you very much Richard and a related question from attendees has to do with: what treatment history might prevent an individual from participating? I know you mentioned a couple of agents but if you could just summarize that I think that would be helpful.</P><P><strong>RR:</strong> Sure. The key protocol inclusion and exclusion criteria for this study are as follows: To be included in the study you have to be an adult 18 years or older, you have to be diagnosed with NMO or NMO spectrum disorder, and you also have to have positive antibody NMO test for the AQP4 antibody. In addition, you are required to have relapse history that identifies you as a relapsing NMO patient, this includes at least two relapses within last 12 months, or 3 relapses within last two years with one occurring in the past year. You may be excluded from the study if you are taking rituximab, monoclonal antibody, for the last 3 months or intravenous immunoglobulin for the last three weeks -so you’ll have to wait to enter the trial if you are taking either of those medications. Other exclusion criteria include active infection, pregnancies, and allergies to eculizumab.</P><P><strong>MY:</strong> Richard thank you very much! And now we’d like to turn to Dr. Weinshenker, Brian we’ve heard Dr. Riese mentioned that disability would be assessed on clinical visits. Could you give the attendees a sense what that type of assessment might entail in general terms.</P><P><strong>BW:</strong> Well in NMO we assess disability primarily by the neurological examination. Certainly, we ask patients about their limitations but typically the regulators would be looking for an objective neurologic findings and a scale of score on? a disability scale called the EDSS which has been developed for MS but largely translatable to neuromyelitis optica would be your pretty standard measure of recording disability.</P><P><strong>MY:</strong> Brian, Thank you very much. Dr. Riese we do have a question that focuses on a difference between add-on and pure placebo-controlled clinical trials. Could you comment on that difference and how the Alexion trial relates to the difference?</P><P><strong>RR:</strong> In an add-on trial patients are able to continue with other medications, other medications they are currently taking to prevent NMO relapses. And this includes medications such as methylprednisolone or Solumedrol. In addition to that, they will be receiving study medication as part of the trial – either eculizumab or placebo. This design has an advantage of protecting patients over pure placebo-controlled trials because they still are taking medications that are thought to be active and efficacious in preventing relapses. The PREVENT trial is an add-on design so patients will be able to continue with their other medications to prevent relapses. An exemption to this is what we’ve mentioned to you before, rituximab and mitoxantrone, which are not allowed in the trial.</P><P><strong>MY:</strong> And Dr. Riese, two questions with respect to participation in the clinical trial. First, if a subject choose to end a trial at any time.</P><P><strong>RR:</strong> Yes, you may choose to cancel your participation in clinical trial at any time for any reason.If you do choose to end participation, we would ask you to discuss it with your study doctor.</P><P><strong>MY:</strong> And then one related question: can an individual who is participating in the PREVENT trial also participate in another clinical trial?</P><P><strong>RR:</strong> The answer that question is no. If you are participating in the PREVENT trial you will no longer be able to participate in other trials. The reason for this is that we want to get clear information from this trial. If you are simultaneously participating in other trials that may make final conclusions that we are able to draw from this trial unclear.</P><P><strong>MY:</strong> And Richard other than the must clinical visits scheduled you mentioned are subjects participating in a clinical trial allowed to sort of live their day-to-day lives anyway that is normal to their history or will they have to change any aspect of their day to day living?</P><P><strong>RR:</strong> The goal of clinical trial is that between study visits the patients will be able to maintain their normal day-to-day activities. We will ask patients to remember and record any potential side effects if they should occur. And again if there are symptoms or signs of relapse that they contact their study doctor right away. And also, if they change any of their medication during the trial we ask that they write that down and let the study doctor know during their next visit. Other than that, we expect our patients will be able to continue with their life as normal.</P><P><strong>MY:</strong> Thank you very much. And what we would like to do is to start to summarize the webinar and first we’d like to ask Dr. Weinshenker to offer any final comment or perspective he may feel important take-home messages from this particular webinar. Brian, please.</P><P><strong>BW:</strong> Thank you Michael. My first reflection is that it’s very exciting time that we are entering where definite clinical trials are being conducted that hopefully will lead to approved medications for neuromyelitis optica. We have treatments right now but the level of evidence that supports them is certainly not optimal and because of this we have difficulties working with insurance companies to get approval for these agents but if we have hard evidence from rigorous clinical trials that provide definitive information as we expect from this and other clinical trials. I think we will have treatments that we can confidently prescribe to patients where we won’t have difficulties with insurance companies regarding coverage. But opportunities such as those that we face there are also challenges. Still challenges to individual patients in wrestling with a difficult decision whether to participate in a placebo-controlled study. And as we’ve discussed looking at those risks and assessing how a particular study design might mitigate some of those risks to individual participants will be important but with potential adverse effects of agents which is with newer agents that don’t have a very wide usage and we don’t have a long-term follow-up… it also poses challenges. But that is the way I see it – exciting times with many opportunities but risks ahead. We’ll have to keep our eyes open.</P><P><strong>MY:</strong> Brian Thank you – Brian Weinshenker, expert NMO clinician. Thank you so much Brian. And now turn to Dr. Riese for any final comments or perspectives regarding take-home messages. Dr. Riese?</P><P><strong>RR:</strong> Thank you Michael, as Dr. Weinshenker has said it is certainly very exciting to work on projects that develop new medications for patients who need them. And this is our mission at Alexion, particularly for patients with rare diseases such as NMO. In this respect, we are very excited about this clinical trial. We are eager to evaluate the safety and efficacy of eculizumab in NMO. I would also like to thank the Guthy Jackson Charitable Foundation for this opportunity to present our clinical trial, and to thank Doctors Yeaman and Weinshenker for the interesting and relevant discussions about NMO and our PREVENT study. Thank you.</P><P><strong>MY:</strong> Richard, thank you so much! Dr. Richard Riese, Global Medical Science Lead Alexion Pharmaceuticals. Richard thanks again.</P><P>If you’d like to experience this webinar again or to learn more information – you are invited to visit the NMOtion gateway of The Guthy-Jackson Charitable Foundation website using the link shown on this slide. If you have any difficulty accessing this link please contact the foundation directly. And now we would like to return back to Jacinta Behne to conclude this seminar.</P><P><strong>JB:</strong> Thank you so much Michael.</P><P>As a reminder for those who may have join us late, the content is solely that of the respective industry or its representative. Webinar slides and audio will be posted on the foundation website for later viewing and audio. Simply go to the foundation website and click NMOtion site. All perspectives are offered only for stakeholder self-education. The Guthy Jackson Charitable Foundation does not perform clinical trials nor does it endorse any particular clinical trial design or drug. We hope this webinar has been informative to all stakeholders. And to you Dr. Yeaman our moderator, Dr. Riese our presenter and Dr. Weinshenker our expert NMO clinician – thank you so much for joining us today and for your enthusiasm and response and willingness to bring this really important information to our NMO advocates. Thank you so much and this concludes out webinar today. Thank you.</P>' , video : 'http://www.youtube.com/embed/ACuTbKDslGo?showinfo=0&amp;rel=0', pdf : 'http://nmotion.guthyjacksonfoundation.org/pdf/Webinars/Series-One/12_19_14_Alexion_Webinar_PPT_Complete_Deck.pdf' },
           { id: 2, title : 'Chugai Pharmaceuticals : NMO Clinical Trial Update Webinar', content : '<p><strong>Jacinta Behne:</strong> We’d like to welcome you to the first in the series of educational webinars brought to you by The Guthy-Jackson Charitable Foundation. There is great interest in current trials in NMO and we are pleased to bring you this Chugai NMO clinical trial webinar. Our moderator for this session is Doctor Michael Yeaman. Dr. Yeaman, I turn to you please.</p><p><strong>Michael Yeaman:</strong> Thank you, Jacinta and good morning. We welcome attendees from around the world to this educational webinar, not only participating this morning but also available to view this material in the future. We look forward to a very interesting and informative session.</p><p>The format for the series of webinars is summarized on this slide. The session is 45 minutes in length and that contains the welcome, the introduction and the presentation itself and then the questions and answers period. Attendees are welcome to submit questions in the questions-and-answers window online. You are welcome to do it during the presentation if you’d like. We would appreciate any interest and questions. Please be as succinct as possible if you choose to submit a question. After the presentation is complete, the presenters and panelists will address as many questions as time permits. We do appreciate that you understand that all questions will be addressed simply due to time limits. However the webinar slides and audio will be posted on the Foundation website for future viewing and experience.</p><p>We are very fortunate to have esteemed colleagues with us today. Presenting will be Doctor Athos Gianella-Borradori. He’s the chief medical officer to Chugai Pharma USA. Our panelist today, Doctor Brian Weinshenker expert NMO clinician at the Mayo Clinic. My name is Michal Yeaman and I’m at UCLA. I’m an advisor to The Guthy-Jackson Charitable Foundation and I am happy to serve as a moderator to this webinar.</p><p>As a friendly reminder, we appreciate all attendees understanding that the content of the presentation is solely that of the respective industry or its representative. The presenters are afforded a maximum of twenty minutes total time for the presentation. Questions and answers are going to be afforded up to 20 minutes of time or the balance of the webinar. Please note, the webinar is being recorded for purposes of future distribution and that all perspectives are offered for stakeholder’s self-education. We also appreciate, that everyone recognizes that The Guthy-Jackson Charitable Foundation does not perform clinical trials nor does it endorse any particular clinical trial design or drug candidate.</p><p>With this brief introduction we’d now like to turn to doctor Gianella-Borradori and ask him to begin his presentation, Athos please.</p><p><strong>Athos Gianella-Borradori:</strong> Good morning and welcome everybody. Thank you for the kind introduction. I am the chief medical officer of Chugai. Chugai is a large Japanese pharmaceutical company which has headquarters in Tokyo. I am talking from our office here in the US which are in New Jersey.</p><p>We have a group of very talented scientists who for many years have been trying to find a new way to better control inflammatory reactions and to develop new medicines that would have anti-inflammatory effect. One of those medicines, we call SA237, is a monoclonal antibody against an IL-6 receptor. And I will talk actually a bit more about IL-6 later. This molecule is in a clinical study we call Sakura Star study or the code of the study is SA309-JG.</p><p>On the next slide we see some of the key thoughts that  have supported the research to our monoclonal antibody. We started to work, as I said, on a molecule that we would aim at offering to subjects with NMO, new and better treatment.  Our thinking was to look for the medicine that would allow a better control of the disease after presentation and would offer options for better maintenance. This very much is the content of the first bullet point on my slide.  Finding molecules for maintenance therapy of NMO is  very important.  Maintenance would prevent further deterioration and further worsening of symptoms, in fact if SA 237 is proven safe and effective, it would be an option for maintenance.</p><p>Why our focus on IL-6? IL-6 is a molecule that is a growth factor for those blood cells that produce antibodies.  In NMO there is a group of cells that produce indeed anti-aquaporin 4 antibody. This antibody can then attack cells in the nervous system. Our data generated mainly in animal models and then from patients with other diseases show that by suppressing interleukin 6 we have a good control of chronic inflammation. The expectation is that by blocking interleukin 6 in NMO SA237 can control inflammation and can actually reverse inflammation and improve symptoms were small studies using a, I would say, a predecessor of SA237 tocilizumab. This is a medicine which is actually on the market for patients with arthritis. Patients with NMO who received this treatment had a decrease in the frequency of relapses. So we went on to develop SA237, with an idea of developing an improved anti-IL6 receptor antibody. Improved in terms of offering better safety, better activity and improvement in convenience for subjects with NMO. We have good experience with tocilizumab that has been used for many years in tens of thousands of subjects with arthritis.  We know quite well, both the safety and the activity profile of blocking the IL-6 receptor.   SA237 is investigational, and we have ongoing clinical studies in subjects with NMO.</p><p>On the next slide is a cartoon, I would like to go through briefly – our concept of recycling of the antibody and why SA237 is expected to provide additional benefits to subjects with NMO and NMOSD.  After injection under the skin SA237 circulates in the blood.  The blood brings SA237 to cells that are involved in inflammation and cause tissue destruction.  These cells express IL6 receptor that helps them stay alive and remain active. SA237 binds IL6 receptor on the cell surface, once bound, this complex of receptor plus IL-6 is taken up by the cell.  Inside the cell, what happens with SA237 is different than what happens with normal antibodies.  Normal antibodies once inside the cells, are degraded and they are eliminated together with what they have found. With our recycling technology we have developed a way that allows this antibody to  release the target.  SA237 inside the cell releases the IL-6 receptor to which it is bound.  IL6 receptor is degraded and eliminated while SA237 is recycled back to the cell surface and it is put back into circulation. So we have antibody that works actually several times without being destroyed.  This is the beauty of this recycling technology. It really allows a medicine to hang around for long time in the body of the subject and be active for a longer time then the currently available molecule. With  this molecule we started studying, Sakura Star Study.</p><p>On the next slide we see some of the key inclusion and exclusion criteria for this study which is currently ongoing and recruiting subjects throughout the US and Canada. It is a study where we include subjects with NMO or NMOSD.  With an age of 18 to 74 years. Subjects must had have at least one relapse in the 12 months preceding study entry and a disability score between 0 and 6.5. For safety reasons we have to exclude certain conditions and these include pregnancy or lactation, it includes evidence of other diseases of central nervous system such as multiple sclerosis or progressive multifocal leukoencephalopathy. We have to exclude patients that had a recent infection prior to baseline and then patients that had strong immunosuppressive agents.</p><p>On the next slide, some of the key elements of the study in terms of time and in terms of what happens once the subject enters the study. There is always a period when the study candidates are evaluated which is called a screening period which is approximately one month.  During this time study candidates have all the time to review, study documentation.  Doctors can take time to explain the study in detail and go extensively into the advantages and disadvantages of participating in this clinical study.  Most important, explain what is the purpose of the study, what are the possible risks and possible benefits of participating in this study.  So this is 28 days and we thought it is a sufficient, actually it is a long and sufficiently long time to provide required information.</p><p>Then once the candidate has decided that he wants to participate then there will be randomization.  This is actually an electronic process where a subject will be allocated to either SA237 as a single agent or will be allocated to a control with pure placebo. There will be no treatment other than the study drug. Neither the doctor nor the study participant will know what agent has been given whether SA237 or placebo. And the likelihood of the subject to receive SA237 is 2:1 vs the likelihood of receiving placebo. The duration of the treatment period, the double-blind period, lasts until the subject experiences relapse. If there is no relapse then the treatment continues double-blind for about a year. As soon as there is a relapse, then very rapidly the subject can stop the double blind period and will enter what we call an open label phase, where every study participant will receive or can receive SA237 for approximately one more year.</p><p>It’s a study where we’ve taken a great care to allow the frequency of both dosing and visits to be compatible with the continuation of the life that subject had before. So we really try to keep the number of visits to the minimum necessary to insure safety and good monitoring. So for the first month it is every two weeks, and then once a month for the remainder of the study.</p><p>On the next slide I summarized what we would like to achieve with this study.</p><p>In this study we will monitor for the first relapse from the beginning of study treatment. We will compare this time to first relapse between subjects that have received SA237 and subjects that have received placebo. And obviously, our hope and great expectation is that it takes a longer time to first relapse in the subjects receiving SA237. I think it is very important, to us, to doctors, and to subjects, that the study requires a very strict monitoring, to insure that as soon there is a slight suspicion of symptoms the subject is rapidly assessed and rapidly treated as soon as relapse has been confirmed.  This is to really avoid any harm or any worsening of the condition due to relapse, which has not been assessed readily enough.</p><p>And on the next slide, I listed additional efficacy outcome measures. They include: measurements of changes in pain, changes in fatigue, we look at evolution of health status over time, if you are able to walk 25 feet, and then obviously we look how the disability changes over time. An important  aspect of this study is the interest both from us at Chugai and then from many physicians scientists participating in our study, to  understand better NMO, NMOSD and understand better how SA237 and the block of interleukin 6 works in this condition. So, some sites participating in this study have extensive MRI scans of brain, optic nerve and spinal cord to see really what happened before, during and after an attack, and to see how blocking IL6 can influence these  changes.  We have detailed immunological evaluation looking at cells and factors that are involved in inflammation in the blood and in the spinal fluid of subjects participating in this study. Again, this will happen at some selected sites and only with subjects that are willing and prepared to undergo these additional evaluations.</p><p>Our target is to study 70 patients in 40 clinical study sites.  These sites are across the US and Canada. I think it is very important for us and everybody involved in this study to make this study a success in terms of recruitment.  As you know, unfortunately, very often clinical studies are started and have to stop because of insufficient recruitment. When it happens it is a disaster for everybody, for the people who have started the study, and the people who participate in the study.  Here we make a big effort to make sure that we can recruit within reasonable time frame subjects to do this study.</p><p>The next slide summarizes a bit our thinking, why, our effort should actually lead to a successful recruitment.  On one side SA237 is administered subcutaneously. It is an injection under the skin, and as I mentioned before, it is an injection given at the beginning every two weeks for a month, then it is a monthly injection.  So it should be very compatible with people continuing their normal life.  Then we are taken care of reducing the risk of a subject receiving a placebo by offering a 2:1 randomization, so there is a higher likelihood to receive SA237 versus receiving pure placebo.</p><p>The double blind phase will go until relapse and after relapse every study participant will have the option to continue on SA237 for a prolonged period of time. We know that paying for study associated things like travel, meals, accommodation, gas, can be a burden for subjects so we are using a credit card system called Greenphire which will allow patients and, caregivers to settle all expenses related to travel and meals and so on, directly without the need of any out of pocket money. Chugai has also decided that for participants who complete the study, SA237 will be made available free of charge until the FDA authorizes SA237 to be marked it. It is obviously not going to happen unless this study shows good safety and good activity in subjects with NMO.</p><p>The last slide is more about SA237 and the name of our study. So as I mentioned before, SA237 has been discovered in Chugai laboratories, which are based in Japan.  The name Sakura is the Japanese name of the cherry blossom tree.  This is in Japan very important, I’d say, it has big identity and emotional value.  The yearly blossoming of this trees, which are just beautiful, symbolizes the beautiful return of life and we’ve actually taken this image of the return as a symbol of SA237 recycling from the blood into the cell after having done its job and then back into the blood where it needs to do its job again.  This is very much the end of the information I wanted to share with you today, If you have questions you do not want to ask during the webinar you can find information on the page http://clinicaltrial.gov.  There are some of the key elements of this study and some of the key sites that currently are enrolling patients.  Obviously ask your doctor any time about the possibility or the option to join the study.  After talking so much about SAkura and the cherry blossom on the last slide we just finish on the beauty of the flowers, and I thank The Guthy-Jackson Charitable Foundation for organizing this webinar today, Dr. Weinshenker for his continuous support and guidance in this project and to all the individuals listening to this webinar. Myself and Chugai we look forward to working closer together.  Thank you very much.</p><p><strong>MY:</strong> Thank you very much Athos. This is Dr. Athos Gianella-Borradori, Chief Medical Officer, Chugai Pharma USA. We now would like to move to the next slide please and enter the questions and answers portion of the webinar. As a reminder we encourage Dr. Gianella-Borradori as well as Dr. Weinshenker to please offer as succinct responses as you can in interest addressing as many questions as time permits.</p><p>Athos, one of the themes of the questions coming from attendees around the world have to do with cost. And you mentioned a system that involves a type of credit card. Could you please clarify that would be paid by Chugai or that would be paid by the patient?</p><p><strong>AGB:</strong> The credit card system allows patients and the relatives to settle payments. The credit card is charged to Chugai.  Obviously there will be a limit but the limit is fairly generous and our experience so far is very good.  It works very well. There have been other studies where this system has been used and it was good. By the way, the limit depends also on the geography: in some places we know that costs are higher so there is a higher limit and other places where costs are lower there is a little bit lower limit.</p><p><strong>MY:</strong> Thank you Athos. Another question has to do with, if a patient is considering joining the trial would their own doctor or would a study doctor be the individual treating them during the trial itself.</p><p><strong>AGB</strong>:  During the study it has to be the study doctor. To become a study doctor we require specific training. Study doctors are also in hospitals or sites that have undergone specific preparations and have been qualified to participate in clinical trials. So every subject who thinks this study could fit its needs has actually to be treated and to be followed by a study site and by a doctor accredited to be a study doctor. However they can be referred by their doctor and they can be followed by their doctor. So the connection between the doctor and the subject remains; now in addition there will be a study doctor specific for the study period.  Then when the study is over it would be again 100% a personal doctor of the subject. Does this answer the question?</p><p><strong>MY:</strong> Yes it does Athos. Thank you. And your point about very good and close communication between the patient and their doctor with respect to this trial is very important. And now we would like to turn to Dr. Weinshenker and ask: Brian may be you could offer a few key questions that a patient considering entering this clinical trial or any clinical trial may want to ask their doctor with respect to these kinds of initiatives.</p><p><strong>BW:</strong> Thank you Michael. Yes, I think the key points that patients need to consider are the risks of participation. That would include the risks of the experimental agents, what is known about that agents and of course the risks of their disease and how that might be impacted by participation in the study. The most obvious would be their potential exposure to placebo. We&#39;ve heard that there&#39;s two out of 3 chances in this study that patients will receive the active treatment but that means one out of three chance that they would receive placebo. And in this study, that would mean that if they were assigned to placebo they would not be receiving any kind of maintenance treatments that might protect them from the attacks of NMO. And in addition to knowing what the odds are going to be on placebo they&#39;d want to know how long they would be exposed to placebo. We heard that in this study it would be until, the patient experiences a first relapse. If they experience the first relapse they would no longer be required to be in this blinded portion of the study where they might be exposed to placebo or at the end of one year of participation in this study the patient would no longer be asked to stay on placebo and would have exposure to the drug. And then of course, they&#39;d want to know a bit about the potential benefits what the experience of an agent in patient with NMO. And of course if there is no experience directly in NMO what about the experience of that drug in other diseases. And how effective has that agent been. So I think those would be the key questions that subjects would want to consider when they&#39;re deciding whether to participate.</p><p><strong>MY:</strong> Brian, thank you very much. And on the topic of relapse, we&#39;d like to ask a couple of questions that both, Athos and Brian, you might like to comment on. Specifically for this trial Athos, what kinds of signs or symptoms are considered by Chugai in defining a relapse and what might be the interventional approach to dealing with the relapse?</p><p><strong>AGB: </strong>First, the interventional approach is very much up to the doctor, the treating physician. It is his decision how he wants to approach it, what is best for the patient. There we have no influence and no recommendation. We just take a great care during the study to make sure that there is very regular and intensive contact with the subject to really capture as early as possible any indications of deterioration. What type of signs or symptoms would indicate deterioration? I think, most of the subjects on the line that have this disease know that there is visual impairment, worsening of visual symptoms, there could be more pain, difficulties walking.  Any neuro logical signs or symptoms that may indicate that there is inflammation need to be reported immediately to the physician.  It will be physician decision whether these signs or symptoms really constitute a relapse or whether there is something else going on, which is not a disease relapse but something else.</p><p><strong>MY:</strong> Athos thank you very much, and Brian may be you could comment. We do understand from Athos’ prior comments the double blind terminology, meaning that neither the doctor nor the subject know what the subject is receiving. So Brian, in that light how would you address a relapse in this type of clinical trial?</p><p><strong>BW:</strong> Thanks Michael. Of course when the physician is confronted by patient reporting new symptoms it is not critical for them to know whether the patient has been receiving the active treatment or placebo -they would be handled the same regardless. And the typical symptoms of an attack of neuromyelitis optica are either optic neuritis, affecting vision and that would be typically eye pain accompanied by blurred or even total loss of vision typically in one eye but it could affect both eyes. Or a spinal cord attack which could lead to a combination of weakness in the legs, occasionally the arms, bladder difficulty and the loss of sensation in the legs. So those would be the most common attacks. Rarely patients may have attacks that affect their brain and it may cause some unusual symptoms like vomiting and hiccups that can be persistent for days, weeks or even months. Obviously the attacks would be picked up very quickly but there may be some unusual attacks in patients who participate in this study will obviously be sensitized to those symptoms so they would know how to recognize them. In terms of how the attacks would be managed, standard treatment would be intravenous corticosteroid treatment typically a drug call methylprednisolone or solumedrol. But there are other corticosteroids and that would be administered for a period typically of about 5 days and if the patient would not respond there are some other rescue treatments. The commonly used one is plasma exchange, but other agents like IVIG are used by some physicians and we’ve heard that it would be to the discretions of their physician which treatments were administered.</p><p><strong>MY:</strong> Brian, thank you very much. Athos maybe we can return to you. There are important questions addressing the point of, is this trial open only to North American patients or if more global, how might non-North American patients enroll or consider enrolment?</p><p><strong>AGB:</strong> The study 309 has study sites in the US and in Canada. For this specific protocol we only have study sites in these two countries, in the North American continent.  We have another study ongoing, the study 307, and that study sites in Europe and in Asia. So if a subject with NMO is in Germany in the UK, or in Poland or in Taiwan has NMO and wants to join the study, we have study sites in these countries and in other countries as well.</p><p><strong>MY:</strong>  Thank you Athos. And Athos could you address a question that has to do with what exactly might occur at every clinical visit for a subject. Will they draw blood, will they have imaging, what exactly would happen?</p><p><strong>AGB:</strong> There will be detailed neurological examinations, blood tests, we need to follow exactly what happens in the blood and what effect not taking away IL6 from the blood has on blood cell count, white blood cells, red blood cells, platelets.  We will always look in detail whether SA237 has an effect on the function of the liver. So we look in the blood at the parameters of liver function and we look at kidney function. There will be obviously test of the blood levels of interleukin 6 receptor and the molecule itself in the blood. So we have a number of tests, it will be a visit lasting anywhere between 2 and 4 hours to allow all these detailed evaluations which are extremely important to assess both safely and activity of the planned SA237.</p><p><strong>MY:</strong> Thank you Athos and maybe you could expand just a little bit and comment on prior experience with this type of the treatment. What might be some of the expected risks that you would be looking for and you would be to address should they occur.</p><p><strong>AGB:</strong> I think there are two types of risks. Ones that we have seen now in years of treatment with the more traditional anti-IL6 receptor tocilizumab, used for many years in patients with arthritis and autoimmune diseases.  Then there are theoretical risks. What we have seen with tocilizumab are some usually mild and transient changes in the production of blood cells.  IL6 is a growth factor for certain white blood cells, and for platelets.  If this is taken away, the body has to adapt to a lower levels and the body is actually is very good at compensating, so this is quite rapidly a correction in the production of blood cells if they go down. The second effect is of is the decrease in inflammation and a decrease in the body’s  ability to respond to an infection. There is a mild increase in infections in subjects receiving this type of agent. Usually, it is not severe, it is not perceived as a big issue; it is mild infections more like flu and these types of things. Like every agent, also SA237 has an effect on liver function.  We’ve seen increases in what are called liver enzymes: substances that are released from liver cells when they are damaged.  The liver is a big organ and in general recovers very well from any damage caused by these types of molecules.  Lastly, antibodies are not substances that the body normally produces so having an anti-IL6 antibody injected can cause a  production of molecules that block the activity in some subjects. Like an immune reaction against a foreign protein.  We measure in subjects the level of this antibody, and sometimes this antibody against SA237 can be high and can block SA237 activity. It is a rare event and we monitor it very carefully and we haven’t seen anything so far. I think these are pretty much the key risks, or the key adverse effects that we have observed in subjects receiving anti-IL6 antibody.</p><p><strong>MY:</strong> Athos, thank you very much and may be you could offer a little bit of perspective regarding developmental timeline for this agent. Should it prove successful Athos, what kind of timeline might a patient expect in terms of it becoming available ultimately?</p><p><strong>AGB:</strong> I guess we have here three key milestones. One is to complete recruitment and to do this we really count on a global effort.  There is Chugai, foundations like The Guthy-Jackson Charitable Foundation and obviously our physicians participating - in the study - they are a great help and a great source of support.  So one is to complete recruitment, it is a rare disease, it is a difficult condition, and a study is not for everybody. Some people will have difficulties accepting the idea of going on a study.  As Brian mentioned, there is a placebo arm, which is a pure placebo that the FDA required - it is not something we decided to do, it is something that we have to do because it is required.</p><p>The second aspect is about collecting the data, and we need a certain number of relapses to see the difference between two arms and that may take some time. Third and this we cannot predict, is the time that in the US the FDA will take to review the study data. The questions the FDA might have and the time it might take us to answer those questions. Now, if everything goes well, the study recruits according to timeline, FDA is quick in reviewing, I think by 2018 this agent if proven safe and effective could be on the market.</p><p><strong>MY:</strong> Understood Athos, thank you so much. And now what we&#39;d like to do is to begin to conclude this webinar and to do that we&#39;ll ask both Dr. Weinshenker and Dr. Gianella-Borradori to offer any sort of summary, take home messages to either emphasize key points or to mention things that may not have been mentioned thus far. We begin with Dr. Weinshenker.</p><p><strong>BW:</strong> Yes, thank you Michael. It is of course very exciting time for the NMO community, for patients, for physicians and all stakeholders now that these phase 3 clinical trials are moving forward we have treatments that we have been using but the level of evidence that supports their use is certainly suboptimal and as a result it is difficult for physicians to secure insurance approval without clear definitive evidence and regulatory approval for these drugs we can envision now a time that where we have drugs where we have definitive evidence from properly controlled trials that will lead to regulatory approvals. But of course with all these opportunities come risks; risks for patients, risks for participation in studies because of variety of factors including the fact that some patients be randomized to receive placebo for at least a period of time. And because these drugs are new and although there are experiences with related drugs it is often difficult to entirely know the side effects that we may observe in these studies. But as you heard many measures are being put into place to make sure that patients are carefully monitored, that relapses are promptly detected and treated and so I think we&#39;re all looking forward to this opportunity to move ahead and get definitive therapeutics for neuromyelitis optica. Thank you.</p><p><strong>MY: </strong>Dr. Brian Weinshenker - expert NMO clinician, Mayo Clinic. Brian thank you very much, And now we would like to ask Athos if he might offer any final comments please.</p><p><strong>AGB</strong>: I think from the Chugai perspective, we are obviously very engaged in developing SA237 for subjects with NMO and NMOSD. I think our science is good and strong. I think the role of interleukin 6 in this type of disease is well established. Our scientists have done a very good job in making a molecule that would make people’s lives easier in terms of frequency of administration, once a month, subcutaneous administration under the skin with minimal need to stay in the hospital or go to the hospital. In our study we&#39;ve taken a great care to allow subject to continue the life as it was before with rare hospital visits. At the same time there is intensive monitoring and close monitoring with telephone calls and so on to really make sure that even the placebo patients are not exposed to risks and once the scientific question of the study has been answered then immediately there would be active treatment offered even to the patients who are on the placebo. I think that was already mentioned on the side that on the approval the study here in Chugai is that for subjects who complete the study we will actually offer SA237 for free until the FDA approves the drug for sale in the pharmacies. In many ways I think we went a long way with trying to find the best solution for everybody to make study participation attractive and actually useful for everybody. I say useful, because if this study is positive well then there will be, this maybe the first official approval of a medicine by regulatory agencies for subjects with NMO and NMOSD. So we count very much on everybody’s support and participation to make this endeavor a success. I am going to thank Mike and Jacinta very much for helping us with this.</p><p><strong>MY:</strong> Athos, thank you very much. Dr. Athos Gianella-Borradori, Chief Medical Officer, Chugai Pharma USA.</p><p>If you&#39;d like to experience this seminar once again or to learn more information.  You are invited to visit NMOtion gateway of The Guthy-Jackson Charitable Foundation website using the link shown on screen now. If you have any difficulty accessing this link please contact the foundation directly and they will be happy to help you. And at this point we will return back to Jacinta Behne, the host from The Guthy-Jackson Charitable Foundation to conclude this webinar, Jacinta.</p><p><strong>JB:</strong> Thank you so much Michael and thank you so much to Dr. Gianella-Borradori, wonderful that you could join us today and present your presentation on Chugai clinical trials as well many thanks to our panelist Dr. Weinshenker expert NMO clinician very much appreciated. And to you Dr. Yeaman for your willingness and support to moderate this webinar.</p><p>For those of you who joined late, I want to be sure that we share some information with you as we conclude today. The content that you just viewed and received in audio is solely that of the respective industry or its representative. The webinar slides and audio will be posted on the foundation website for later viewing and audio. I am also told will be sending you - please watch your inboxes or various social networking to let you know when the posting will occur. It&#39;s quite likely that it might be one week because we certainly have to receive the audio and such. So just you might check that or as Michael pointed out you certainly may contact the foundation. All perspectives that you just heard are offered only for stakeholder’s self-education. The Guthy-Jackson Charitable Foundation does not perform clinical trials nor does it endorse any particular clinical trial or drug. We hope this webinar was informative to all attendees, all stakeholders. We thank you very much for joining us today and we will conclude this webinar with the Chugai team.</p>' , video : 'http://www.youtube.com/embed/l7xAu9g9a6I?showinfo=0&amp;rel=0', pdf : 'http://nmotion.guthyjacksonfoundation.org/pdf/Webinars/Series-One/12_12_14_Chugai_Webinar_PPT_Complete_Deck_FINAL.pdf'  },
           { id: 3, title : 'MedImmune : NMO Clinical Trial Update Webinar', content : '<p><strong>Jacinta Behne:</strong> Thank you so much everybody for joining the new educational webinar series brought to you by The Guthy-Jackson Charitable Foundation. My name is Jacinta Behne and I am happy to welcome you here today. Today we bring you our first clinical education webinar series focused on clinical trials. This session is brought to you by MedImmune MedImmune with Dr. Armando Flor, presenter, Michael Yeaman the moderator and we are pleased to welcome Dr. Brian Weinshenker as our expert NMO clinician. Michael I turn to you and welcome you and ask you please begin.</p><p><strong>Michael Yeaman:</strong> Thank you very much Jacinta and we welcome attendees from around the world to this educational webinar. We look forward to this interesting and very informative session.</p><p>The format of the series of webinars is summarized on this slide. The session is 45 min in length comprising 4 parts: the Welcome, the Introduction, the Presentation and the Questions and Answers period.</p><p>Attendees are welcome to submit questions in questions-and-answers window online. Please be as succinct as possible if you choose to submit a question. After the presentation is complete, presenters and panelists will address as many questions as time permits. Thank you very much for understanding that not all questions will be addressed simply due to time limits. However the webinar slides and audio will be posted on the Foundation website for future viewing.</p><p>We are very fortunate to have esteem colleagues today. Presenting will be Dr. Armando Flores, Director of Clinical Development at MedImmune. Our panelist today is Dr. Brian Weinshenker, expert NMO clinician at Mayo Clinic. My name is Michael Yeaman. I am at UCLA and an advisor to The Guthy-Jackson Charitable Foundation.</p><p>As a friendly reminder, we appreciate all attendees understand that the content presented today is solely that of the respective industry or its representative. The presenters are afforded a maximum of up to twenty minutes total time with Questions and Answers then afforded up to 20 minutes time or the reminder of the webinar. Please note that the webinar is being recorded for purposes of a future distribution.  All perspectives in the webinar today are offered for stakeholder’s self-education. And thank you for understanding that The Guthy-Jackson Charitable Foundation does not perform clinical trials nor does it endorse any particular clinical trial design or a drug. With this brief introduction we would now like to turn to Doctor Armando Flores and ask that he begins his presentation.</p><p><strong>Armando Flor:</strong> Thank you very much Michael. I would like to thank the Guthy-Jackson Foundation for arranging and executing this webinar series and also for the opportunity to present to the NMO community the work and research that MedImmune is currently doing in this area. MedImmune has recently begun recruiting for a clinical trial in NMO. This is the N-MOmentum study, this is a clinical research study in NMO that if successful and approved will give the NMO community and physicians that treat this rare disease a new approved treatment alternative. The N-MOmentum study is been conducted to test if the drug <strong>MEDI-551</strong> will have proven benefits of reducing the risk of NMO or NMOSD attack.</p><p><strong>Neuromyelitis optica</strong> and neuromyelitis optica spectrum disorder is the autoimmune disease of the central nervous system that affects the optic nerve, spinal cord and sometimes the brain. Currently we have good evidence that B cells which are white blood cells have an important role in the disease process and pathogenesis of autoimmune disorders such as NMO. Usually these B cells protect the body by producing proteins in the form of antibodies against harmful substances. However under certain circumstances the immune system can react against itself leading to autoimmune diseases like NMO. A subset of these B cells have a <strong>CD19</strong> protein attached to the surface of these cells. These cells represented here in the upper right hand corner in this cartoon, are known to be responsible for the productions of <strong>AQP4</strong> antibodies against aquaporin the 4 channel located in the optic nerve, spinal cord and brain leading to damage of these structures and causing neurological impairment.</p><p>MedImmune developed an antibody that binds with high affinity to these CD19 B cells. And when attaches to the surface of these cells starts the process that eliminates these cells by using the body own immune system. MEDi-551 is a humanized monoclonal antibody. A monoclonal antibody is an antibody grown artificially in a laboratory. Humanized means that the engineered sequence of this protein is almost identical to the human version therefore it has been developed to be given to humans. Medimmune has conducted previous clinical trials with MEDI-551 in other autoimmune disorders like scleroderma and multiple sclerosis. And also we have several ongoing clinical trials with malignancies of B cells.</p><p>The purpose of this cartoon is to explain how different subsets of B cells evolve from the immature state to the most mature functional circulating B cells in the blood. And also how different MEDI-551 is from other B cell depleters like for instance <strong>Rituximab</strong>. B cells develop form the immature state in the bone marrow represented in this cartoon by stem cells on the left side to the mature differentiated B cells represented here by plasma blasts and plasma cells to the most right of the cartoon. These mature, differentiated B cells circled in red are the source of the production of auto-antibodies to autoimmune disorders. These cells that carry the CD19 antigen protein will be eliminated by MEDI-551. Rituximab is a medication that is frequently used to treat NMO. It works similarly to MEDI-551 in that it also eliminates B cells in the blood however it targets and eliminates a different subset of B cells that have the CD20 protein attached to the surface and not the CD19 (as you can see from this diagram underneath the cartoon). Although Rituximab is effective in the treatment of NMO, many patients still experience NMO attacks on Rituximab therapy probably because the drug does not eliminate CD19 cells source of the auto-antibody production.</p><p>Now, let me review and explain the design of our clinical trial. This is a placebo controlled trial. A placebo is an inactive substance that looks like the study drug being tested, but has no effect on the disease. The trial population allows recruiting for sero-positive and sero-negative NMO patients. We will need to enroll 212 NMO patients of which 80% will be sero-positive and 20% will be sero-negative. The objective of this study is to determine whether MEDi-551 compare to placebo is able to reduce the risk of a new attack. In other words, whether we can significantly prolong the attack free time in patients with NMO. This is translated in this study as our primary end point to be time to first attack. The drug is MEDi-551, this is the active drug. It will be giving 300mg intravenously twice, at Day 1 and at Day 15 and then every 6 months. This is a pure placebo study, which means that no other immunosuppressive treatment will be allowed in the placebo arm. Who will receive MEDi-551 and who will receive the placebo will be chosen at random by a computer. This is called the randomization. For this study the random selection will give the patients a 75% chance, or 3 in 4, of getting MEDi-551 and 25% chance, or 1 in 4, of getting placebo. This is a double-masked placebo controlled study with an open labeled period. Double-masked means that both the patient and the study stuff, for example your doctor or a nurse given the study drug do not know who is or will be receiving MEDi-551 or placebo. This masked period will last for 6.5 months or 28 weeks. In order to get the information needed the study needs 67 attacks to determine whether MEDi-551 is effective in reducing the risk of a new attack compared to the placebo. Because this is a pure placebo design, safety is our priority we will monitor our trial participants closely by phone calls every two weeks and through scheduled visits to the doctor. In addition, because it is a placebo design again, your physician is allowed to use rescue medications such as IV steroids or <strong>plasmapheresis</strong> in case an attack occurs.</p><p>The only medication that is allowed during trial is prednisone, which is a type of steroids. This medication will be given by mouth, 20mg a day for 2 weeks and followed that by one week of tapering. Both the MEDi-551 and the placebo groups will be receiving prednisone. The reason why we giving this medication is becuase it takes approximately two to three weeks for MEDi-551 to eliminate those B cells. And during this time we will cover the patient with oral steroids to prevent possible attacks. In addition, some of the NMO patients will be on oral steroids before and entering the study and this will allow for tapering. In addition, before administering MEDi-551 or placebo we will premedicate with intravenously <strong>methylprednisolone</strong> which the other name is Solu Metrol, oral Benadryl and Tylenol. This cocktail of medicines will prevent and decrease the frequency of infusion related reactions that has been observed with MEDi-551 and other B cell depleters like Rituximab. If a patient is experiencing an attack a treating physician will administer rescue medication according to the local standard of practice. Again no other immunosuppressive therapy will be allowed during this trial.</p><p>These are the study visits details. During the screening visits the aquaporin sero status will be determined and the physical and neurological examination along with vital signs and electrocardiogram will be done. Blood and urine will be collected to determine your general health and for other exploratory tests. An EDSS and ophthalmology examination will be performed along with the baseline MRI. After that, you will enter the masked period. We will have 9 scheduled visits that are shown in here. During these visits will perform the same procedures plus we will assess for adverse events. EDSS and ophthalmology examination will be done at Day 1, Day 85 and Day 197 which is the end of 6.5 months and the MRI will be performed by the end of the randomized trial period at Day 197 as well.</p><p>After the randomization masked period the patients will have an option to enroll to the open labelled period. The open label period will help to gather more information about safety of MEDI 551 when giving for longer period of time and in addition gives the opportunity for the patients to continue to receive a B cell depleter. After the open label period which is a minimum of one year and maximum of 3 years or until local approval, the patients will enter the safety follow up period, where we follow the B cell status recovery of each patient.</p><p>In summary, MEDi-551 depletes CD19 B cells, which is the source of the production of the aquaporin IgG AQP4 antibodies that cause NMO and NMOSD. The N-Momentum study is a pure placebo controlled study with a masked treatment period of 6.5 months and a randomization of 3:1, where 75% of patients will be on MEDi-551 and 25% on placebo only. After the randomization controlled period the trial participants will have the option to enter the open-label period where all participants will receive MEDi-551.</p><p>For any additional information, please visit the link that I have provided in this slide or you can contact AstraZeneca Clinical Study information center at 1-877-240-9479 or information.center@astrazeneca.com. Thank you very much.</p><p><strong>MY:</strong> Armando, thank you very much for that presentation. We would now like to enter the Questions and Answers portion of the webinar. As a reminder we encourage doctor Flores and doctor Weinshenker to please offer as succinct responses as you can in interest of addressing as many questions as time permits. Armando let&#39;s begin with a question which often comes up with has to do with costs, is a subject and/or their caregiver supported to participate in terms of covering costs of medicines and travels for example.</p><p><strong>AF:</strong> Thanks Michael. Yes, MedImmune is committed to provide financial assistance for patients and caregivers that are participating in this trial. This will be however determined on case by case basis and is based on investigator request. The financial aid includes, could include, but it is not limited to, travel, help, lodging and also per diem cost. financial help from MedImmune will be available for  patients. But again this will be by request of the physician that is treating the patient.</p><p><strong>MY:</strong> Armando thank you and maybe we can extend on your last point there. For many individuals considering clinical trials, they are interested in who actually will be treating them during the clinical trial, will it be their personal doctor or will it be a special study doctor? Armando?</p><p><strong>AF:</strong> Sure. In order for your physician to treat you during this study he must be an investigator participating in the trial. If your doctor is not participating in the trial he can refer you to a center or to a neurologist that is participating in the study. We have several sites in the United States and around the world and we can always provide names and numbers where you can contact these experts or centers that are participating in our clinical trial.</p><p><strong>MY:</strong> Great. Thank you very much Armando. And now let’s turn to the Dr. Weinshenker. Brian maybe you could address a very common question regarding what are the key points that a patient may want to discuss with their doctor about entering this or any other clinical trial? Brian?</p><p><strong>BW:</strong> Sure Michael, I guess the first question is ones tolerance for risk. There is always risks of participation in clinical trial. First the risk of the agent that&#39;s being studied and secondly the risks from the disease itself and here the major risk would be exposure to placebo. We&#39;ve heard about number of mitigating design factors that&#39;ve been introduced in this study to reduce risks. Patients will all will get prednisone at the start of the treatment period to ensure that they have some coverage for attack prevention until the study drug, assuming the patient is receiving the study drug, becomes active. The chances will be 75% that the patient will be receiving the active treatment. And patients will be asked to stay in the placebo period for 6 months or 6.5 months before they will have an option of switching over to the open-label and then they would not receive placebo anymore. So I guess that issue of tolerance of risk. And the secondly patients obviously do have options, they have access to other medications. Dr. Flores talked about some of those options that are available so of course patients do help the NMO community in general by participating in these studies but they certainly should consider potential benefits to themselves. And for those patients who have received other standard treatments and continue to have problems may be quite motivated to have access to a new medication.</p><p><strong>MY:</strong> Brian, thank you very much. And maybe then Armando we can come back to you and ask a little bit about one of the questions that comes up, and that is why are relapses required for this or any clinical trial in NMO to be the most informative. Armando?</p><p><strong>AF:</strong> Thanks Michael. Yes, In order to determine the efficacy of the drug compare to placebo in decreasing the risk of a new attack, relapses are needed to provide the necessary information for the primary end point. I think regardless the study design, whether it is add-on study or a pure placebo, attacks have to, must occur, and we need the attacks to determine whether the drug is efficacious or not. In our study, because of the design 3:1 in the 6 month masked period we need 67 attacks, a portion of them must happen in the placebo and a portion of them must happen in the active treatment but nevertheless, attacks are needed in order to know whether any drug not only MEDi-551 indeed is able to prolong the attack free time in patients with NMO compared to placebo. That’s the only way to see whether the drug is working or not. And I will ask Brian if he has any other comments.</p><p><strong>BW:</strong> I think you said it very well Armando. An unfortunate reality of this disease is that attacks do occur and in order for clinical trial to be successful and informative we do have to see attacks but presumably patients who will be participating have experienced attacks and we talked about some of the design features that you have built in as have other groups that are running clinical trials in order to reduce the risks and to promptly identify these attacks and treat them promptly to limit the amount of permanent damage that may occur as a result of those attacks.</p><p><strong>MY:</strong> Brian maybe we can ask you to expand a little bit on that. First questions are often focused on how will a patient know for sure whether they experiencing a relapse and then what would be sort of a reasonable approach to addressing a relapse should it occur on this clinical trial. Brian?</p><p><strong>BW:</strong> Well, patients will certainly be educated as to what symptoms they should watch for in fact all the participants would have experienced or should have experienced previous attacks so they might be somewhat familiar with them. But in general for neuromyelitis optica, the most common attacks are optic neuritis, whether it is eye pain or commonly there is eye pain with either impaired vision or complete loss of vision, typically in one eye at a time but it can affect both eyes. And the other major type of attack is myelitis or the spinal cord inflammation that results in combination of weakness in the legs, one or both legs, problems with bladder function and loss of sensation. So those would be key attacks but there are some unusual attacks for example prolonged vomiting without other explanation. And in some patients it may even be something like paralysis on one side or confusion - these can be attacks - although quite rarely for neuromyelitis optica. Patients should not relay on their own judgment however. Any such symptoms should be reported to their neurologists who from the extensive experience should be able to recognize whether these symptoms sounds suspicious for attacks. They will be able to conduct neurological examinations that would be able to prove it or disprove it. And in some situations patients may require MRI imaging to provide necessary information to be absolutely certain that it isn&#39;t attack.</p><p><strong>MY:</strong> Thank you Brian. And Armando, is there a method that MedImmune has formulated so if the patient does experience an attack during clinical trial, would there be a rapid response? Could you please comment on that?</p><p><strong>AF:</strong> Sure Michael. Yes, as Brian said, patients will recognize an attack that is coming by either having eye problems or weaknesses or the rare forms of brain attack with vomiting and other symptoms. If that is the case, if they experience the signs or symptoms of NMO attack they need to contact the treating physician – right away, but not later than 72 hours. MedImmune, we follow these patients closely, we will call them every two weeks to see how they doing whether they experienced any new changes. We also have several visits to the doctor where the treating physician can examine and decide whether there are changes in the general physical examination and in the neurological examination that could be the beginning of the attack. Regardless, they have to contact the physician right away or within 72 hours, if that happens the site doctor will have the patient come to the office and make and evaluation, perform the physical and neurological evaluation to determine whether the signs and symptoms are indeed related to an NMO attack. If that is the case, other assessment will begin. We will be doing EDSS to determine if there is any neurological impairment. And we will do detailed ophthalmological examination to test for visual acuity. In addition if the attack visit is determining that that the attack is happening we will do also an MRI at the time of that visit. That will cover all the necessary procedures to make sure that the attack symptoms that this patient has experience is indeed an NMO attack.</p><p><strong>MY:</strong> Thanks Armando. And Brian just one last point on this topic. Should the attack be determined by the judicious process to be real? What would be the medical intervention to help minimize harm? Brian?</p><p><strong>BW:</strong> Yes, patients would receive intravenous corticosteroids typically a drug called methylprednisolone or Solu Medrol for 5 days. That would be standard treatment that would be no different whether the patient is receiving the active treatment or placebo. In fact their physician would not know which group they are in and the treatment would be the same regardless. For patients who do very well on these treatment no further treatment may be necessary but for patients who have severe attacks that don’t seem to be responding, typically the plasma exchange is a treatment that is used. Other investigators may use other treatments such as IVIG - and again that would be available for the patients in this study.</p><p><strong>MY:</strong> Thank you very much Brian and now Armando a few practical and logistical questions that come up. First can a patient who is participating in this clinical trial also participate in other interventional clinical trials while participating in this trial?</p><p><strong>AF:</strong> Thanks Michael. That is very important to make sure that the patients know that they cannot participate in other clinical trials while in this particular one. Once the patient has enrolled and be randomized to MEDi-551 or placebo he will not be able to receive any additional immunotherapy or any other investigational drug while he or she is in the clinical trial. Very important to know that.</p><p><strong>MY:</strong> And an extension of that point Armando, how long might a subject plan to participate in this trial. You mentioned 6.5 months for the double-masked period and then some time after that. Could you just summarize it for us please?</p><p><strong>AF:</strong> Absolutely. So 28 days for the screening, then we have 6.5 months for the masked period and that would be followed by the open label period. The open label period is a minimum of a year and a maximum of 3 year after the last dose has been given to the last subject or until the approval of the drug. And after that we will have a safety follow up which is at least 12 months, when we follow for the B cells. So altogether it will be between 2 and 3 years that the patient will be participating in the clinical trial.</p><p><strong>MY:</strong> And just a two other follow-ons Armando, may a subject choose to end a participation in this clinical trial at any time?</p><p><strong>AF:</strong> Yes, absolutely. Patients have the right to end the participation in the trial at any time. Absolutely.</p><p><strong>MY:</strong> And finally on this topic Armando. What happens after subject completes their participation in the clinical trial. How long might they expect to learn about the results?</p><p><strong>AF:</strong> Well, that is a very good question Michael. I mean, it all depends how long it takes us to enroll the number of patience we need. We need 212 patients. This is a global clinical trial so we have sites all over the world but once that the data is logged we have to look at the data and see what the data means. It is about a good period of 6 months to a year to make sure that we have the necessary data to provide the information into…or how the drug worked. So once the clinical trial is done expect at least 6 months to see the results whether the drug has worked or not.</p><p><strong>MY:</strong> Thank you Armando, and one other question. I think you mentioned it earlier but just to get a little bit more specific, which continents or countries are participating in the MedImmune clinical trial?</p><p><strong>AF:</strong> Yeah, it is important. It is a global study, so we have pretty much every single continent participating. We have North America, including the US and Canada. We have countries in Latin America including Peru, Colombia and Mexico. In Europe - Spain Germany, Turkey, Poland and The Czech Republic will be participating. And in the Asian Pacific region, we have Japan, South Korea, Taiwan, Indonesia and China. In addition, South Africa and Israel will also be participating countries to this clinical trial.</p><p><strong>MY:</strong> Thank you so much Armando. And now Armando one other question as regards to potential risks and then we will come back to some closing comments from both, you and Brian. But first Armando, a question often comes up, asking what are the risks that a subject might consider, specifically with regards to infections or other risks that you mentioned in your presentation.</p><p><strong>AF:</strong> Sure, First of all, patients need to understand that this is a pure placebo trial so they have to understand the risk in when entering any trial…, for this trial they have 25% chance to be on the placebo arm and the risks associated with that in terms of attacks. For this particular drug, this is a drug that has been investigated in other indications, in scleroderma and multiple sclerosis, therefore we have some safety data. The only identifiable risks, in other words, what we have seen in these 2 clinical trials are infusion related reactions. These are reactions to the infusion of the medication. And we decrease or minimize these infusion related reactions by premedicating with this cocktail of medication that I said before which is IV Solu Medrol, Benadryl and Tylenol. Now, this is a B cell depleter, so there is one other drug on the market with a similar   mechanism of action, which is Rituximab. So the B cells that help immunity, we are carefully looking for any type of infections that could happen in these patients. That is why one of the exclusion criteria is that if the patient had in the past severe viral or bacterial or fungal infections that had him hospitalized before the randomized controlled period – they will not be eligible to participate. So far, this is still an experimental drug but in the previous clinical trials that we have conducted we have not seen any of these. That would be the most important one to know. Also, of course, because of that, audience who are interested can go to clinicaltrials.gov and look at the exclusion criteria. Patients who have history of immunodeficiency, HIV positive or any type of congenital immunodeficiency would be not be allowed to enter the trial as well.</p><p><strong>MY:</strong> Armando, thank you so much. And now we would like to begin to conclude the questions and answers period. We&#39;ll first ask Dr. Weinshenker to offer any kind of brief comment he may feel to be especially important take-home messages. Brian?</p><p><strong>BW:</strong> Thank you Michael. Of course this is a very exciting time for the entire NMO community for patients for their physicians. We are finally moving to the stage having definitive clinical trials that are being rigorously conducted. They should give us the kind of data we need in order to make sure patients have access to medications. In the present time, because we do not have approved drugs, this often causes problems with the insurance approval because there isn&#39;t a rigorous proof for the medications that we have. But along with this opportunities are risks and we heard about them. Risks of experiencing an attack, if you are one of the 25% in this study were randomized placebo. We&#39;ve heard about some of the ways these risks are being minimized. Rituximab of course, sorry MEDi-551 of course, is somewhat similar drug to Rituximab which is now widely used drug. We&#39;ve heard from Armando why this drug might be even potentially more effective but until this is demonstrated rigorously in clinical trials I think it is premature to speculate. So exciting times but along with those exciting times come risks and patients will need to consider what is best for them.</p><p><strong>MY:</strong> Dr. Brian Weinshenker expert NMO clinician, Brian thank you very much. And now we would like to turn for some final comments from Dr. Armando Flores. Armando please.</p><p><strong>AF:</strong> Thanks Michael. I just would like to congratulate the Guthy-Jackson foundation for doing this webinar series. This is an excellent way for patients to learn what is happening in NMO research and, you know, the options NMO patients have for clinical trial and participating in them. I think it is important, I always stress out to, it is important have patients to talk to their doctors to see which is the best trial for them. As Brian said, every trial is different, every trial has different risks. Risks are always there because that is how we are trying to prove that the medication works or not. I now like to, along the lines of Brian, this is very exciting time for the NMO community, of having multiple trials to be done, and to have an approved therapy for this devastating disease. And this is somehow we choose the name for our clinical trial – the N-Momentum because in the last two years there has been great interest from NMO community and from scientists around the world of how to solve this problem to give a therapy and understand the disease. So I again thank you very much for this opportunity I hope we’ll have an answer soon and we’ll have eventually an approved therapy for patients with NMO, Thank you.</p><p><strong>MY:</strong> Dr. Armando Flores, director of clinical development, MedImmune. Armando, thank you very much.</p><p>If you&#39;d like to experience this webinar again or to learn for more information you are invited to visit the NMOtion gateway of The Guthy-Jackson Charitable Foundation website using a link shown on this slide. If you have any difficulty accessing this link please contact the Foundation directly. And now I would like to return to Jacinta Behne to conclude this webinar.</p><p><strong>JB:</strong> Thank you so much Michael. To those of you who might have joined late we want be certain to share with you that content is solely that of the respective industry or its representative. The webinar slides and audio will be posted on the foundation website for later viewing and audio.</p><p>If you were not able to capture that link in the prior slide, simply go to our foundation website. On the front page you will see NMOtion slide - if you select that - it will take you directly to the NMOtion website. And from there it&#39;s there, so please do feel free to go back and revisit this particular webinar as well.</p><p>All perspectives are offered only for stakeholder’s self-education. The Guthy-Jackson Charitable Foundation does not perform clinical trials nor does it endorse any particular clinical trial design or drug. We hope this webinar has been informative to all stakeholders.</p><p>And to you Dr. Flores, Dr. Weinshenker, Dr. Yeaman many thanks from the foundation for your willingness and your responsiveness and your enthusiasm in helping us to bring this educational webinar series to all interested attendees. We thank you so much today. We thank attendees for joining this webinar, we invite you back to the website to view again if you choose to later. And wish you a very happy day a pleasant day. Thank you so much. And now this concludes the webinar. Thank you.</p>', video : 'http://www.youtube.com/embed/OUnbdi0xW_A?showinfo=0&amp;rel=0', pdf : 'http://nmotion.guthyjacksonfoundation.org/pdf/Webinars/Series-One/12_17_14_MedImmune_Webinar_PPT_Complete_Deck_Final.pdf'  }
    ]

  return {
    all: function() {
      return ctw;
    },
    remove: function(ctw) {
      ctw.splice(ctws.indexOf(ctw), 1);
    },
    get: function(ctwId) {
      for (var i = 0; i < ctw.length; i++) {
        if (ctw[i].id === parseInt(ctwId)) {
          return ctw[i];
        }
      }
      return null;
    }
  };
})

.controller('CTWsCtrl', function($scope, CTWFactory){
    $scope.ctws = CTWFactory.all();
   if(typeof analytics !== 'undefined') { analytics.trackView("Clinical Trials Webinar"); }
})

.controller('CTWCtrl', function($scope, $sce, $stateParams, CTWFactory){
    $scope.ctw = CTWFactory.get($stateParams.ctwid);
    if ($scope.ctw.video){
        $scope.videourl = $sce.trustAsResourceUrl($scope.ctw.video);
    }
})

.factory('CTFaqsFactory', function() {

  var faqs = [
            { id: 1, title : 'What is Clinical Research?', content : 'Clinical research is medical research that involves patients. Patients, called subjects in clinical research, volunteer to participate in carefully designed and conducted studies seeking to find better ways to prevent, diagnose, treat, and eventually cure human disease. These advances come with improved understanding of the causes and effects of the disease. Clinical research includes clinical trials and clinical studies in which new treatments and strategies are tested in hopes of improving the health and wellness of patients. In addition, clinical research can focus on clinical science, which assesses discovery aspects of medicine, including disease onset or relapse risks, genetics, epidemiology, and other features associated with cause or variable manifestations of disease. All clinical research is required to adhere to careful protection of subjects and their information, and in the United States clinical trials in particular are regulated and monitored by the U.S. Food and Drug Administration (FDA) and the National Institutes of Health (NIH). Respective agencies in other countries follow similar practices' },
           { id: 2, title : 'Why do we need clinical trials?', content : 'Clinical trials are designed to determine which medicines or procedures best benefit patients, and which may not. These studies often involve expert teams from academic, governmental and pharmaceutical sectors. In some cases, clinical trials seek to test the efficacy of a new drug for a disease which has no proven effective therapy. In other trials, one treatment is compared with another to examine which may be best in patients of differing disease stage or condition. Clinical trials are usually divided into different “phases”, each of which is designed to address a slightly different question:\n\nPhase I: usually designed to test the “safety” and to learn the best dosing regimen of a new drug to minimize side effects. Subjects are usually healthy volunteers, and the study is often relatively short in duration. Subjects do not usually benefit from a Phase I study.\n\nPhase II: usually designed to study the drug based on results from Phase I. Here, the drug, device, or procedure is evaluated in volunteer subjects who have the disease of interest. Phase II trials further refine safety, minimize adverse events, and begin to explore if and how the test agent may benefit the subject. Some volunteer subjects may benefit from a Phase II study.\n\nPhase III: usually compares the test candidate (drug, device, or procedure) to a commonly used agent that has been proven to be at least somewhat effective in treating a condition, if one exists. This phase is designed to understand if the test agent is better than existing approaches, and where the agent might best fit in managing a particular disease.' , video: "http://www.youtube.com/embed/p5KxUfz6BIo?showinfo=0&amp;rel=0" },
            { id: 3, title : 'Why do people participate in clinical trials?', content : 'People participate in clinical trials for many reasons. Healthy individuals often say they participate to help others and to contribute to new or better ways to prevent or treat disease. Volunteers who have a disease also participate to help others, but may also receive new or improved experimental treatments. In addition, subjects who are involved in clinical trials receive additional care and attention from the clinical trial staff. Sometimes, blood relatives of the patients with diseases participate in certain trials which evaluate the genetic components that may pose potential disease risks.' },
           { id: 4, title : 'Who participates in clinical trials?', content : 'People from all walks of life participate in clinical trials. Some are healthy, while others may have illnesses. Sometimes, blood or genetic relatives of a subject suffering from an illness can participate together in a clinical trial. Usually, each clinical trial or study specifies which subjects may participate. These terms are called the Inclusion Criteria or Exclusion Criteria. Factors that allow someone to participate in a clinical trial are "inclusion criteria." Those that exclude or not allow participation are "exclusion criteria." These criteria are based on factors such as age, gender, the type and stage of a disease, previous treatment history, and other medical conditions. Before joining a clinical trial, a participant must qualify for the study. Some research studies seek participants with illnesses or conditions to be studied in the clinical trial, others may need healthy volunteers whereas, some others, require both.'  },
            { id: 5, title : 'What do I need to know if I am thinking about participating?', content : 'Clinical trials involve risks, just as routine medical care and the activities of daily living. However, all clinical trials are designed to minimize such risks. Institutional and regulatory agencies carefully monitor clinical trials before they are allowed to begin, and during their performance, to ensure risks are minimized and any adverse events are addressed promptly. A clinical trial can be halted if a treatment is found by interim analysis to have unacceptable side effects, lack of efficacy (termed futility), or even exceptional efficacy. If safe and feasible, participating in a clinical trial to its completion is the best way to maximize the information learned from that trial. It is also important to note that a subject can choose to exit a clinical trial at any time for any reason. When weighing the risks of clinical research, each person may consider several important factors, including the potential for: \n\n1. improved therapeutic benefit(s)\n\n2. advancing knowledge in the field\n\n3. adverse outcomes or other issues\n\n Risks to subjects participating in clinical trials can be minor, serious, or even life-threatening side effects to established or experimental treatments, or placebo. The study may require more time and attention than a standard treatment regimen would, including more frequent visits to a study site. Important science is also done in most clinical trials. This work may involve additional blood tests or procedures, or other clinical activities. Some study participants experience complications that require medical attention. In rare cases, participants have been seriously injured or have died of complications resulting from their participation in trials of experimental therapies.\n\nNo matter how promising or effective a new treatment may seem, clinical trials are essential for it to be specifically approved by regulatory agencies for use in treating NMO. Potential benefits of participating in a clinical trial also include the chance for each NMO patient to play an active and important role in advancing knowledge in NMO health care, and possibly gaining access to new treatment being tested in the trial. It should be noted that some trials involve placebo groups, which may not receive an experimental or existing treatment regimen. In any case, participating in a clinical trial assures regular and careful medical attention from an expert clinical and research team that includes doctors and other health care professionals.\n\nThe specific risks associated with a clinical trial protocol are described in detail in the informed consent process (also see below). In this process, individuals considering participation in a clinical trial are provided detailed information about the purpose of the trial, the drug or drugs being evaluated, the potential benefits and risks, as well as the schedule of clinical visits, duration of the trial, and other information. Potential subjects are afforded time to carefully consider this information, and raise any questions or concerns they may have. Only when a potential subject is fully informed and satisfied that their questions or concerns have been addressed by a physician or other members of the clinical research team are they invited to sign an informed consent document. Signing the informed consent is the starting point for enrollment in the clinical trial and participating in it.\n\nIt is in the best interests of all concerned that patients and caregivers be as informed as possible to aid in their personal decisions when considering participation in a clinical trial.\n\n' , video: "http://www.youtube.com/embed/LOFQm9WhWOE?showinfo=0&amp;rel=0" },
           { id: 6, title : 'What happens after a clinical trial is completed?', content : 'After a clinical trial is completed, the researchers carefully examine information collected during the study. The analysis includes evaluation of potential benefits as well as potential risks. Statistical and other quantitative assessments of the data are also carefully reviewed before any assertions are made by the trial investigators or sponsors. In addition, the entire package of study results and analysis may be submitted to regulatory agencies for review and potential approval for use in treating NMO. Each of these steps is part of the process to best determine the meaning of the findings and potential need for further testing. After each trial phase, industry sponsors decide whether to advance to the next phase, or to stop testing the agent or intervention for a variety of reasons, including efficacy, adverse events, and other relevant factors.\n\nIdeally, results from clinical trials are published in peer-reviewed academic journals, regardless of outcome. Peer review is a process by which objective experts in the field review the data and interpretations thereof before publication to ensure that any analysis and conclusions are supported by the evidence. If the results are particularly important, they may be featured in news media and discussed at scientific meetings and by patient advocacy groups after they are published. Once a new approach has been proven safe and effective in a clinical trial that is reviewed and approved by appropriate regulatory agencies, it may become an option or a standard of medical practice.'  },
            { id: 7, title : 'What is the NMO clinical trial information email group list?', content : 'The NMO Clinical Trial Email Information Group List is an opportunity for you to sign up to receive email notifications about NMO clinical trials. Joining the email list does not mean you are signing up for a clinical trial. Rather, joining the group simply indicates that you are interested in receiving news and latest information regarding clinical science or clinical trials focusing on NMO. Importantly, the Foundation does not share your contact information with any other third parties, or for marketing, advertising or profitable services.' },
            { id: 8, title : 'What types of questions might I ask if I am considering joining a clinical trial?', content : 'If you are considering enrolling in a clinical trial, it is important that you ask any questions or bring up any issues concerning the trial at any time. The following suggestions may give you some ideas as you think about your own questions:\n\nThe Study\n\nWhat is the purpose of the study?\nWho will fund the study?\nWho has reviewed and approved the study?\nHow are study results and safety of participants being monitored?\nHow long will the study last?\nWhat will my responsibilities be if I participate?\nWhat are the possible risks and benefits?\nWhat are my possible short-term benefits?\nWhat are my possible long-term benefits?\nWhat are my short-term risks, such as side effects?\nWhat are my possible long-term risks?\nWho pays for my medical care in relation to the trial?\nWhat happens if I experience an adverse event in the trial?\nCan I exit the trial at any time for any reason if I wish?\nWhat other options do people with my disease have?\nHow do the possible risks and benefits of this trial compare with those options?\n\nParticipation and Care\n\nWhat kinds of therapies, procedures and /or tests will I have during the trial?\nWill they hurt, and if so, for how long?\nHow do the tests in the study compare with those I would have outside of the trial?\nWill I be able to take my regular medications while in the clinical trial?\nWhere will I have my medical care?\nWho will be in charge of my care?\nPersonal issues\nHow could being in this study affect my daily life?\nCan I talk to other people in the study?\n\nA key step in enrolling in a clinical trial is called informed consent. In this step, each potential subject will be carefully and thoroughly informed of the details of the trial, and encouraged to ask any questions about any aspect of the trial design, purpose, clinical investigators, or industry sponsor. Only when all questions or concerns have been addressed, and qualification is determined based on inclusion and exclusion criteria, is a patient invited to sign the informed consent document to begin enrollment as a clinical trial subject. ' , video: "http://www.youtube.com/embed/LOFQm9WhWOE?showinfo=0&amp;rel=0"  },
            { id: 9, title : 'How am I protected?', content : 'Ethical Guidelines\n\nThe goal of clinical research is to develop knowledge that improves human health or increases understanding of human biology. People who participate in clinical research make it possible for these advances to occur. The path to finding out if a new drug or medical procedure is safe or effective is to test it on patient volunteers. Clinical trials are carefully designed by experts, and subjected to judicious review by institutional review boards and regulatory agencies to minimize the risks and maximize the information likely to be gained. However, because there are uncertainties in a clinical trial, there is an inherent potential for bias or adverse outcomes. The purpose of ethical guidelines is both to protect patient volunteers and to preserve the integrity of the science. Ethical guidelines in place today represent lessons learned from historical experiences to improve the safety and reliability of clinical trials in the best interests of patients and all concerned.\n\nInformed Consent\n\nAs described above, informed consent is the process of volunteer patients learning the key facts about a clinical trial before deciding whether to participate as clinical trial subjects. The process of providing information to subjects and addressing any questions or concerns continues throughout the study. To help someone decide whether to participate, members of the research team explain details of the study. The research team provides an informed consent document, which includes such details about the study as its purpose, duration, required procedures, and who to contact for various purposes. The informed consent document also explains risks and potential benefits.\n\nOnce an individual decides to enroll in a clinical trial, they are required to sign an informed consent document. It is important to note that informed consent is not a contract, it is a process, and all clinical study volunteers are free to withdraw from the study at any time for any reason.\n\nInstitutional Review Board (IRB) or Ethics Committee (EC) Oversight\n\nEach clinical trial must be approved and monitored by an Institutional Review Board (IRB) or Ethics Committee (EC) to ensure that the risks are minimal and are worth any potential benefits. The IRB or EC is an independent committee that consists of physicians, statisticians, and members of the community including ethicists and in some cases clergy, who ensure that clinical trials are ethical and that the rights of participants are protected. Governmental regulations require all institutions that conduct or support biomedical research to have an IRB or EC initially approve, regularly monitor, and periodically review the research.' },
            { id: 10, title : 'What is The Guthy-Jackson Charitable Foundation\'s role in NMO Clinical Trials?', content : 'The Foundation endorses clinical trials as a best means to evaluate new or better ways to prevent, diagnose, treat, and potentially cure NMO. However, as a non-profit charitable organization, we strictly do not endorse any specific clinical trial, clinical trial design, agent or experimental drug or procedure, or pharmaceutical company. Additionally, the Foundation does not participate in subject recruitment or eligibility evaluation for any trial, nor does it act or participate in any way in performance, data assessment, interpretation, regulatory agency review, or recommendations that may be derived from any clinical trial or its outcomes.\n\nThe role of the Foundation is to act solely as a facilitator of public information to the NMO community.'   }
           
    ]

  return {
    all: function() {
      return faqs;
    },
    remove: function(faq) {
      faqs.splice(faqs.indexOf(faq), 1);
    },
    get: function(faqId) {
      for (var i = 0; i < faqs.length; i++) {
        if (faqs[i].id === parseInt(faqId)) {
          return faqs[i];
        }
      }
      return null;
    }
  };
})

.controller('CTFaqsCtrl', function($scope, CTFaqsFactory){
    $scope.faqs = CTFaqsFactory.all();
   if(typeof analytics !== 'undefined') { analytics.trackView("Clinical Trials View"); }
})

.controller('CTFaqCtrl', function($scope, $sce, $stateParams, CTFaqsFactory){
    $scope.faq = CTFaqsFactory.get($stateParams.faqid);
    if ($scope.faq.video){
        $scope.videourl = $sce.trustAsResourceUrl($scope.faq.video);
    }
})

.factory('CatFactory', function() {
 //*****************************************************************
  var vids = [{
      catid : 1,
      category : 'Featured Videos'
    },{
      catid : 2,
      category : 'Patient Stories'
    },{
      catid : 3,
      category : 'Foundation Interviews'
    },{
      catid : 4,
      category : 'Questions about NMO'
    },{
      catid : 5,
      category : 'Clinical Trials'
    },{
      catid : 6,
      category : 'Foundation Events'
    },{
      catid : 7,
      category : '2015 NMO Patient Day'
    },{
      catid : 8,
      category : '2013 NMO Patient Day'
    },{
      catid : 9,
      category : '2012 NMO Patient Day'
    },{
      catid : 10,
      category : '2011 NMO Patient Day'
    },{
      catid : 11,
      category : '2010 NMO Patient Day'
    },{
      catid : 12,
      category : 'NMO Roundtables'
    }
  ]

  return {
    all: function() {
      return vids;
    },
    remove: function(faq) {
      vids.splice(vids.indexOf(faq), 1);
    },
    get: function(faqId) {
      for (var i = 0; i < vids.length; i++) {
        if (vids[i].catid === parseInt(faqId)) {
          return vids[i].videos;
        }
      }
      return null;
    },
    getCat: function(catID){
        for (var i = 0; i < vids.length; i++) {
        if (vids[i].catid === parseInt(catID)) {
          return vids[i].category;
        }
      }
      return null;
    }
  };
})

.controller('CatsCtrl', function($scope, $ionicPlatform, CatFactory){
    $scope.cats = CatFactory.all();
  
   $ionicPlatform.ready(function() {
        if(window.Connection) {
          if(navigator.connection.type == Connection.NONE) {

            $scope.isConnected = false;

          } else {
            $scope.isConnected = true;
            if(typeof analytics !== 'undefined') { analytics.trackView("Videos View"); }
          }
      }
   });
})

.factory('VidFactory', function(){
  var vids = [{
        "title": "The NMO Story",
        "videoId": "jokrVgahoIU",
        "categories": ["Featured Videos"]
    },
    {
        "title": "2011 NMO Patient Day - Clinical Panel Q & A Part 1",
        "videoId": "nRqBKZ572ZM",
        "categories": ["2011 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Simplifying the Science of NMO",
        "videoId": "mf3wgga_tnU",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "2011 NMO Patient Day - Clinical Panel Q & A Part 2",
        "videoId": "8oOTT5E8gu4",
        "categories": ["2011 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2010 NMO Patient Day Opening Speech",
        "videoId": "xPc0wUQ_djI",
        "categories": ["2010 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Food for Thought",
        "videoId": "ZowmAjEwD04",
        "categories": ["2015 Patient Day"]
    },
    {
        "title": "Managing Stress",
        "videoId": "BZNcyNSrEi0",
        "categories": ["2015 Patient Day"]
    },
    {
        "title": "Ask a Doctor - NMO Patient Day 2015",
        "videoId": "3K7wiRNz4yE",
        "categories": ["2015 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2010 NMO Patient Day - Mindsight, Mindfulness, and Resilience",
        "videoId": "nxUgIxiAlJk",
        "categories": ["2010 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "What are B cells and why are they important in NMO?",
        "videoId": "Oo9YrqQrXMA",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "2011 NMO Patient Day - Breakout Sessions - Nutrition",
        "videoId": "EEMyK1XfRIs",
        "categories": ["2011 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Is there a relationship between vaccinations and NMO?",
        "videoId": "hIYe96zsUG8",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "2011 NMO Patient Day - Clinical Panel Q & A Part 3",
        "videoId": "10wW1NrXLKs",
        "categories": ["2011 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2011 NMO Patient Day - Research Panel Q & A",
        "videoId": "XJUL_Fvxm6s",
        "categories": ["2011 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "How is transverse myelitis involved in NMO?",
        "videoId": "LfRlKGCMIiY",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "2011 NMO Patient Day - Closing Speech & Group Photo",
        "videoId": "U5DwHAzoNRo",
        "categories": ["2011 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2010 NMO Patient Day - Q&A Panel Introduction & Discussion Part 1",
        "videoId": "Z7pXNfxXzhk",
        "categories": ["2010 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2011 NMO Patient Day - Martha Mann, RN, UTSW",
        "videoId": "7VpDKrGHzjg",
        "categories": ["2011 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "How to Make a Difference in Women's Lives",
        "videoId": "czuTsriR-nE",
        "categories": ["Patient Stories"]
    },
    {
        "title": "2013 NMO Patient Day: NMOtion Presentation",
        "videoId": "WUL2vdmEc5c",
        "categories": ["2013 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2011 NMO Patient Day - Breakout Sessions - Managing Side Effects",
        "videoId": "xuSkE7Glxpo",
        "categories": ["2011 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2011 NMO Patient Day - Breakout Sessions - Pediatrics",
        "videoId": "kk1jAdEit4Y",
        "categories": ["2011 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2010 NMO Patient Day - Spectrum: A GJCF Online NMO Community",
        "videoId": "GQ2GxtadcKU",
        "categories": ["2010 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Why do we need clinical trials in NMO?",
        "videoId": "p5KxUfz6BIo",
        "categories": ["Questions about NMO","Clinical Trials"]
    },
    {
        "title": "How does clinical research benefit solving NMO?",
        "videoId": "-ouaO8WvKPg",
        "categories": ["Questions about NMO","Clinical Trials"]
    },
    {
        "title": "Ask the Founder - NMO Patient Day 2015",
        "videoId": "OYUwkvPuVcY",
        "categories": ["2015 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "What do I need to know if I am thinking about participating in a clinical trial?",
        "videoId": "LOFQm9WhWOE",
        "categories": ["Questions about NMO","Clinical Trials"]
    },
    {
        "title": "Clinical Trial Scoreboard - NMO Patient Day 2015",
        "videoId": "FECmVoN7Gcw",
        "categories": ["2015 NMO Patient Day","Foundation Events","NMO Patient Days","Cl"]
    },
    {
        "title": "What should a primary care physician know when treating NMO?",
        "videoId": "btWVUKT6VFc",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "How do I request the NMO IgG Antibody Test?",
        "videoId": "xXuXJu571oM",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "Advocacy in Action - NMO Patient Day 2015",
        "videoId": "boICJtS0h1M",
        "categories": ["2015 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "What are typical NMO symptoms in children?",
        "videoId": "qjhCIY3sEwA",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "Making NMO History - NMO Patient Day 2015",
        "videoId": "QuCYnSoTxF8",
        "categories": ["2015 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "How important is it to participate in a clinical trial?",
        "videoId": "lO6OdLYCrvo",
        "categories": ["Questions about NMO","Clinical Trials"]
    },
    {
        "title": "What is the main role for a primary care physician treating NMO?",
        "videoId": "Gk3BOGe6WVs",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "2010 NMO Patient Day - Q&A Panel Introduction & Discussion Part 2",
        "videoId": "-kwOFYJVpxM",
        "categories": ["2010 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Welcome - NMO Patient Day 2015",
        "videoId": "S9nZ1V0rjGg",
        "categories": ["2015 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Advancing to Solve NMO - NMO Patient Day 2015",
        "videoId": "iOMiEkDjyYs",
        "categories": ["2015 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "NMOtion Gateway to a Cure - NMO Patient Day 2015",
        "videoId": "RHADuBIqbtI",
        "categories": ["2015 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2011 NMO Patient Day - Breakout Session - Navigating the Healthcare System",
        "videoId": "d1WmI-qO6Cg",
        "categories": ["2011 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "How Patients Will Solve NMO - NMO Patient Day 2015",
        "videoId": "2MAyF5XXHB8",
        "categories": ["2015 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Closing Remarks - NMO Patient Day 2015",
        "videoId": "iUfdsho4ITI",
        "categories": ["2015 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2012 NMO Patient Day - Closing Remarks",
        "videoId": "ba5nG8V8BZU",
        "categories": ["2012 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "What are typical NMO Symptoms?",
        "videoId": "bsdpAtQf8Kg",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "Everything You Wanted to Know Know but Were Afraid to Ask: Bladder, Bowel & Sexual Dysfunctions",
        "videoId": "1iiQTWQcssg",
        "categories": ["2015 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2010 NMO Patient Day - Reaching Out and Coming Together",
        "videoId": "v8vn0hb8MdI",
        "categories": ["2010 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "MedImmune : NMO Clinical Trial Update Webinar",
        "videoId": "OUnbdi0xW_A",
        "categories": ["Clinical Trials"]
    },
    {
        "title": "2012 NMO Patient Day - Q&A Clinical Panel I (Part 2 of 2)",
        "videoId": "M9sV_0Ll944",
        "categories": ["2012 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2013 NMO Patient Day: Victoria Jackson Closing Remarks",
        "videoId": "QUDAPedDpro",
        "categories": ["2013 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2013 NMO Patient Day: Breakout Session - Therapeutic Writing",
        "videoId": "pOqo27nWNZg",
        "categories": ["2013 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2010 NMO Patient Day - Living With NMO",
        "videoId": "gSsZXpRkNZI",
        "categories": ["2010 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "How Do We See in the Dark?",
        "videoId": "o4hNoih_KEU",
        "categories": ["Featured Videos"]
    },
    {
        "title": "What Causes NMO?",
        "videoId": "SewcOjEz0Ss",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "What should patients know if taking immunosuppressive therapy?",
        "videoId": "fSsWj8QiNs8",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "UCD NMO Patient Day: PM Session",
        "videoId": "KQEm532YyWg",
        "categories": ["Foundation Events","NMO Patient Days"]
    },
    {
        "title": "How common is NMO?",
        "videoId": "PS9ZiYOdnxk",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "2012 NMO Patient Day - Simplifying the Science of NMO (Breakout Session)",
        "videoId": "2-LBhjdL8IU",
        "categories": ["2012 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Alexion Pharmaceuticals : NMO Clinical Trial Update Webinar",
        "videoId": "ACuTbKDslGo",
        "categories": ["Clinical Trials"]
    },
    {
        "title": "How Frequent are NMO Relapses?",
        "videoId": "E_8iasOSEtI",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "2013 NMO Patient Day:Breakout Session - Simplifying the Science of NMO",
        "videoId": "CY9uOu5cMIg",
        "categories": ["2013 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2012 NMO Patient Day - Q&A Scientific Research Panel",
        "videoId": "R85YdZbTIxs",
        "categories": ["2012 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2012 NMO Patient Day - Q&A Clinical Panel II",
        "videoId": "BpSdmboApS4",
        "categories": ["2012 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Kathy Najimy interviews Victoria Jackson",
        "videoId": "gGzBHctGb3Y",
        "categories": ["Foundation Interviews"]
    },
    {
        "title": "NMO in the workplace",
        "videoId": "CBQFQB_VXdc",
        "categories": ["Patient Stories"]
    },
    {
        "title": "Chugai Pharmaceuticals : NMO Clinical Trial Update Webinar",
        "videoId": "l7xAu9g9a6I",
        "categories": ["Clinical Trials"]
    },
    {
        "title": "2012 NMO Patient Day - Managing Stress and Fatigue of NMO (Breakout Session)",
        "videoId": "X4IkhXSVSQo",
        "categories": ["2012 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Are We Closer to a Cure?",
        "videoId": "Vo09WemBY_M",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "Does the weather/environment affect NMO?",
        "videoId": "iI2Jzb6j1z0",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "2013 NMO Patient Day: NMO Advocacy Actions",
        "videoId": "UYUQEtVizKU",
        "categories": ["2013 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Are NMO Patients More Likely to have Other Autoimmune Diseases?",
        "videoId": "DRziolQ0Wc0",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "2010 - NMO Patient Day - The GJCF Clinical Consortium",
        "videoId": "tjrRk40Vf0o",
        "categories": ["2010 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "UCD NMO Patient Day: AM Session",
        "videoId": "-ezpGxFBqwE",
        "categories": ["Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Looking Back ...Moving Forward",
        "videoId": "J6-CHE7Y7ps",
        "categories": ["Featured Videos"]
    },
    {
        "title": "How Do Clinical Trials Work?",
        "videoId": "8mi5de3jF14",
        "categories": ["Featured Videos","Questions about NMO"]
    },
    {
        "title": "2012 NMO Patient Day: Hypnotherapy",
        "videoId": "LvUMIuoUzNY",
        "categories": ["2012 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2013 NMO Patient Day: Ask The Doctor - Session 3",
        "videoId": "cz0Yve3aB3A",
        "categories": ["2013 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "What are the Most Effective Drug Treatments?",
        "videoId": "sg1-a7CWmUg",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "Will Embryonic Stem Cell Treatments Help NMO Patients?",
        "videoId": "nRsmUU7x0rg",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "The Foundation with Kathy Najimy Part 2",
        "videoId": "nPoJ8CNT7y4",
        "categories": ["Foundation Interviews"]
    },
    {
        "title": "2012 NMO Patient Day - NMO Advocacy Actions",
        "videoId": "sg_82O13WP0",
        "categories": ["2012 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2013 NMO Patient Day: Q&A Clinical Translation Discussion",
        "videoId": "w583mN_3RGs",
        "categories": ["2013 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2013 NMO Patient Day: Ask The Doctor - Session 2",
        "videoId": "jZyU5VfOyqg",
        "categories": ["2013 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2012 NMO Patient Day - Opening Remarks",
        "videoId": "NFIDJOk6ITc",
        "categories": ["2012 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "How are genetics involved in NMO?",
        "videoId": "twUdF0ZigLQ",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "2012 NMO Patient Day - Patients' Rights (Breakout Session)",
        "videoId": "T_iMePHY6Qc",
        "categories": ["2012 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Advancing to Solve NMO",
        "videoId": "q_TQfFzLwyw",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "Is NMO a form of Multiple Sclerosis (MS)?",
        "videoId": "ek__omkNgjg",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "2010 NMO Patient Day - Stem Cell Transplants and NMO",
        "videoId": "Qnveu9pLgv0",
        "categories": ["2010 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Behind the Scenes: NMO Patient Day",
        "videoId": "AbUlkE8LVJM",
        "categories": ["2011 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "On the Road for NMO",
        "videoId": "Hn83WJxAPJQ",
        "categories": ["Patient Stories"]
    },
    {
        "title": "How do Clinicians treat NMO?",
        "videoId": "Qd-EuQ_huiU",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "2012 NMO Patient Day - The GJCF Biorepository for NMO",
        "videoId": "aU8kgqMzkys",
        "categories": ["2012 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Currently how is NMO/NMOSD best diagnosed?",
        "videoId": "cMDCGMytlE8",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "Ali Opening Speech Video",
        "videoId": "M2yEcWmkhhs",
        "categories": ["Foundation Events","NMO Patient Days"]
    },
    {
        "title": "How Broken is my immune system if I have NMO?",
        "videoId": "N601-kOsKjY",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "Dining for NMO",
        "videoId": "-XGTpGKnY9w",
        "categories": ["Foundation Events"]
    },
    {
        "title": "Do NMO treatments have dangerous side effects?",
        "videoId": "HJGpTSJBo28",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "2013 NMO Patient Day: Breakout Session - Advocacy NMOtion",
        "videoId": "y7x75UEmtfs",
        "categories": ["2013 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Does spinal cord damage occur in NMO?",
        "videoId": "_qSEUPgcmIY",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "2010 NMO Patient Day - The Guthy-Jackson Charitable Foundation Repository for NMO",
        "videoId": "HrCWzLaNQng",
        "categories": ["2010 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "What are T cells and why are they important to NMO?",
        "videoId": "OlzdxYf2gs0",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "What is Optic Neuritis?",
        "videoId": "4Nw464s6-I4",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "Living with NMO: Candace Coffee",
        "videoId": "QtU8I02OxSg",
        "categories": ["Patient Stories"]
    },
    {
        "title": "Christine Ha Inspirational Speech at 2013 NMO Patient Day",
        "videoId": "DgC_JiqE4K4",
        "categories": ["2013 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "A Path to Progress",
        "videoId": "5OyyTkTUgeQ",
        "categories": ["Featured Videos"]
    },
    {
        "title": "From Mascara to Medicine: A Mom on a Mission",
        "videoId": "BgSE193plr8",
        "categories": ["Featured Videos"]
    },
    {
        "title": "What is Neurogenic Pain?",
        "videoId": "sizMWdrlEHQ",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "How does NMO Differ from MS? The Discovery of NMO IgG",
        "videoId": "rt-dMF3QkQw",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "Creating a New Dialogue About NMO",
        "videoId": "Rfh08092hZc",
        "categories": ["Featured Videos"]
    },
    {
        "title": "NMO Tolerization",
        "videoId": "6afvRawxTzc",
        "categories": ["Featured Videos"]
    },
    {
        "title": "Victoria Jackson and Ali Guthy on Ellen",
        "videoId": "ZQCDzLWBdvM",
        "categories": ["Featured Videos"]
    },
    {
        "title": "Insurance and Rare Diseases",
        "videoId": "SOmQfN-0PY4",
        "categories": ["none"]
    },
    {
        "title": "Living with NMO",
        "videoId": "gTlejHmYqsU",
        "categories": ["Featured Videos"]
    },
    {
        "title": "2012 NMO Patient Day - Meditation and Yoga (Breakout Session)",
        "videoId": "4RVgJoF_Cv4",
        "categories": ["2012 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Living with NMO: Collin McDaniel's Story",
        "videoId": "gUh1oCix3tc",
        "categories": ["Patient Stories"]
    },
    {
        "title": "What is the Difference Between Monophasic and Relapsing NMO?",
        "videoId": "UP1lXFZC-0E",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "Ali's Story with Kathy Najimy Part 1",
        "videoId": "-OisV05yRSo",
        "categories": ["Foundation Interviews"]
    },
    {
        "title": "2013 NMO Patient Day: Ask The Doctor - Session 1",
        "videoId": "EajRrSb_ruY",
        "categories": ["2013 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2011 NMO Patient Day: Ali Guthy and Victoria Jackson Introduction",
        "videoId": "p22OAaPH0wE",
        "categories": ["2011 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "NMOtion Be the Cure",
        "videoId": "JbpW635uoxY",
        "categories": ["Featured Videos"]
    },
    {
        "title": "Patient Day Welcome: Ali Guthy & Ms. Victoria Jackson",
        "videoId": "by-KGezTdSE",
        "categories": ["2013 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Pioneering a New Scientific Research Model",
        "videoId": "2uwA1CTEp4M",
        "categories": ["Featured Videos"]
    },
    {
        "title": "Why is it Important to Distinguish NMO from MS?",
        "videoId": "2EZvpyqPcy8",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "The Guthy-Jackson Charitable Foundation 2009 NMO Patient Day",
        "videoId": "Y4sjkeC1vcA",
        "categories": ["2009 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Power of a Mother's Love",
        "videoId": "YvHDhuc_ZGg",
        "categories": ["Foundation Interviews"]
    },
    {
        "title": "2011 NMO Patient Day - Breakout Sessions - Recognizing & Treating Attacks",
        "videoId": "XYhdNZpv2Qs",
        "categories": ["2011 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Ali Guthy and Victoria Jackson on Marie",
        "videoId": "UJLEfMxqKDc",
        "categories": ["Foundation Interviews"]
    },
    {
        "title": "NMO Patient Day: Q&A Clinical Studies Discussion Finding a Therapeutic for NMO",
        "videoId": "NJ3XT6QQy-o",
        "categories": ["Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Why do Patients Recover Differently from Attacks?",
        "videoId": "ZW6yWZqNWcY",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "Ali Guthy and The Guthy-Jackson Charitable Foundation",
        "videoId": "DI2GI9GFY5o",
        "categories": ["Featured Videos"]
    },
    {
        "title": "The Guthy-Jackson Charitable Foundation 2009 NMO Roundtable Conference",
        "videoId": "2NsHh-wqSOM",
        "categories": ["2009 NMO Roundtable","Foundation Events","NMO Roundtables"]
    },
    {
        "title": "2012 NMO Patient Day - Nutrition and Diet (Breakout Session)",
        "videoId": "dFbv5-CiAcA",
        "categories": ["2012 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "2012 NMO Patient Day - Q&A Clinical Panel I (Part 1 of 2)",
        "videoId": "wCobj3k1s44",
        "categories": ["2012 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Hope with Kathy Najimy Part 3",
        "videoId": "NB_5sIseRzE",
        "categories": ["Foundation Interviews"]
    },
    {
        "title": "How is the NMO IgG Antibody detected?",
        "videoId": "d3y8yj-fs1U",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "Can Tissues injured by NMO be repaired (Regeneration/Remyelination)?",
        "videoId": "UeR6YwY_cRs",
        "categories": ["Questions about NMO"]
    },
    {
        "title": "2010 NMO Patient Day - Closing Comments",
        "videoId": "Ace3_jx9RbM",
        "categories": ["2010 NMO Patient Day","Foundation Events","NMO Patient Days"]
    },
    {
        "title": "Should I continue to get vaccinations if I'm on immunosuppressive therapy?",
        "videoId": "0AqLwjVK2yM",
        "categories": ["Questions about NMO"]
    }]
  
  return {
    all: function(){
      return vids;
    },
    byCat: function(category, start, end){
      var vidsbycat = [];
      var k = start;
      var l = 0;
      for (var i = 0; i < vids.length; i++){
        for (var j = 0; j < vids[i].categories.length; j++){
          if(vids[i].categories[j] === category){
            l++;
            if(l >= k){
              vidsbycat.push(vids[i]);
              k++;
            }
          }
        }
        if(k === end){
          return {videos: vidsbycat, more : true};
          
        }
      }
      return {videos: vidsbycat, more : false};
    }
  }
})

.controller('VidCtrl', function($scope, $sce, $stateParams, $ionicModal, VidFactory, CatFactory){
    
  $scope.category = CatFactory.getCat($stateParams.category);
  var getvidsbycat =  VidFactory.byCat($scope.category, 0, 4);
  $scope.vidlist = getvidsbycat.videos;
  $scope.vidmore = getvidsbycat.more;
  
  
  
  for (var i = 0; i < $scope.vidlist.length; i++)
  {
    $scope.vidlist[i].videourl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $scope.vidlist[i].videoId + '?showinfo=0&amp;rel=0');
    $scope.vidlist[i].thumburl = $sce.trustAsResourceUrl('http://img.youtube.com/vi/' +  $scope.vidlist[i].videoId + '/mqdefault.jpg');
  }

  
  $scope.loadMore = function(){
    var lastlength = $scope.vidlist.length
    var start = lastlength + 1;
    var end = start + 4;
    var newvidscon = VidFactory.byCat($scope.category, start, end);
    var newvids = newvidscon.videos;
    $scope.vidmore = newvidscon.more;
    for (var i = 0; i  < newvids.length; i++){
      $scope.vidlist.push(newvids[i]);
    }
    for (var i = lastlength; i < $scope.vidlist.length; i++)
    {
      $scope.vidlist[i].videourl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $scope.vidlist[i].videoId + '?showinfo=0&amp;rel=0'); 
      $scope.vidlist[i].thumburl = $sce.trustAsResourceUrl('http://img.youtube.com/vi/' +  $scope.vidlist[i].videoId + '/mqdefault.jpg');
    }
    $scope.$broadcast('scroll.infiniteScrollComplete');
  }
  
  
  $ionicModal.fromTemplateUrl('templates/vids_menu_modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function(videourl, title) {
    $scope.modal.videourl = videourl;
    $scope.modal.title = title;
    $scope.modal.show();
     if(typeof analytics !== 'undefined') { analytics.trackView("Video Open: "); }
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove();
    $ionicModal.fromTemplateUrl('templates/vids_menu_modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
})

.controller('DocCountriesCtrl', function($scope, $ionicPlatform, $http){
   $ionicPlatform.ready(function() {
        if(window.Connection) {
          if(navigator.connection.type == Connection.NONE) {
           $scope.isLoaded = true;
            $scope.isConnected = false;

          } else {
            $scope.isConnected = true;
            if(typeof analytics !== 'undefined') { analytics.trackView("Find an Expert View"); }
          }
      }
   });
       // Construct the URL
   var url = "https://www.googleapis.com/fusiontables/v2/query?sql=SELECT+Country+FROM+10cSA6A2W-lcwk9vOjxifeI8I2aEfLhUqdBHazTMb+ORDER+BY+Country+ASC&key=AIzaSyDhlq03drUh_5jZYiW0Hj9YXMuaPkMPzho";


    $http.get(url)
        .success(function(data, status, headers, config){
        
           var rows = data['rows'];
           var oldCon = " ";
           var j = 0;
           $scope.countries = [];
           for (var i in rows) {
               var country = rows[i][0];
               
               //Populate State Dropdown
               if ((oldCon != country) && (country != "")) {
                   $scope.countries.push({id : j, country: country});
                   j++;
               }
               var oldCon = country;

           }
          $scope.isLoaded = true;
        })
        .error(function(data, status, headers, config){
            $scope.isLoaded = false;
        });
    
})

.controller('DocCountryCtrl', function($scope, $http, $stateParams){
       // Construct the URL
    $scope.doccountrytitle = $stateParams.countryname;
    var country = $stateParams.countryname;
    var url = "https://www.googleapis.com/fusiontables/v2/query?sql=SELECT+Name%2C+Clinic%2C+City%2C+Phone%2C+Email%2C+Address%2C+Zip%2C+State+FROM+10cSA6A2W-lcwk9vOjxifeI8I2aEfLhUqdBHazTMb+WHERE+Country+%3D+'" + country + "'&key=AIzaSyDhlq03drUh_5jZYiW0Hj9YXMuaPkMPzho";

    $http.get(url)
        .success(function(data, status, headers, config){
        
           var rows = data['rows'];
                     
           $scope.docs = [];
           for (var i in rows) {
               var name = rows[i][0];
               var clinic = rows[i][1];
               var city = rows[i][2];
               var phone = rows[i][3];
               var phonestripped = rows[i][3].replace(/\D/g, '');
               var email = rows[i][4];
               var address = rows[i][5];
               var zip = '';
               var zip = rows[i][6];
               var zipstr = zip.toString();
               var state = rows[i][7];
//             console.log(zip);
//             console.log(zipstr);
//             console.log(rows[i][6]);
               $scope.docs.push({id : i, name : name, clinic : clinic, city: city, state: state, zip: zipstr, phone : phone, phonestripped: phonestripped, email : email, address: address});
              
           }
            $scope.isLoaded = true;
        })
    .error(function(data, status, headers, config){
    $scope.isLoaded = false;
    });

})

.controller('DocStatesCtrl', function($scope, $http){
       // Construct the URL
   var url = "https://www.googleapis.com/fusiontables/v2/query?sql=SELECT+State+FROM+10cSA6A2W-lcwk9vOjxifeI8I2aEfLhUqdBHazTMb+WHERE+Country+%3D+'United+States'+ORDER+BY+State+ASC&key=AIzaSyDhlq03drUh_5jZYiW0Hj9YXMuaPkMPzho";


    $http.get(url)
        .success(function(data, status, headers, config){
        
           var rows = data['rows'];
           var oldState = " ";
            var j = 0;
           $scope.states = [];
           for (var i in rows) {
               var state = rows[i][0];
               
               //Populate State Dropdown
               if ((oldState != state) && (state != "")) {
                   $scope.states.push({id : j, state: state});
                   j++;
               }
               var oldState = state;

           }
     
        })
        .error(function(data, status, headers, config){

        });
    
})

.controller('DocStateCtrl', function($scope, $http, $stateParams){
       // Construct the URL
    $scope.docstatetitle = $stateParams.statename;
    var state = $stateParams.statename;
    var url = "https://www.googleapis.com/fusiontables/v2/query?sql=SELECT+Name%2C+Clinic%2C+City%2C+Phone%2C+Email%2C+Address%2C+Zip+FROM+10cSA6A2W-lcwk9vOjxifeI8I2aEfLhUqdBHazTMb+WHERE+State+%3D+'" + state + "'&key=AIzaSyDhlq03drUh_5jZYiW0Hj9YXMuaPkMPzho";

    $http.get(url)
        .success(function(data, status, headers, config){
        
           var rows = data['rows'];
                     
           $scope.docs = [];
           for (var i in rows) {
               var name = rows[i][0];
               var clinic = rows[i][1];
               var city = rows[i][2];
               var phone = rows[i][3];
               var phonestripped = rows[i][3].replace(/\D/g, '');
               var email = rows[i][4];
               var address = rows[i][5];
               var zip = rows[i][6];
               $scope.docs.push({id : i, name : name, clinic : clinic, city: city, state: state, zip: zip, phone : phone, phonestripped: phonestripped, email : email, address: address});
              
           }
            
        })
    .error(function(data, status, headers, config){
    
    });

})

.controller('NotesCtrl', function($scope, $ionicModal, $ionicPopup, $ionicListDelegate, $cordovaSQLite){
//  $scope.notes = NotesFactory.all();
  if(typeof analytics !== 'undefined') { analytics.trackView("Notes View"); }
  $scope.notes = [];
  $scope.searchNotes = '';
  var query = "SELECT id, title, content, date FROM notes";
  $cordovaSQLite.execute(db, query, []).then(function(res) {
      if(res.rows.length > 0) {
          if(res.rows.length > 0) {
                for(var i = 0; i < res.rows.length; i++) {
                    $scope.notes.push({id: res.rows.item(i).id, title: res.rows.item(i).title, content: res.rows.item(i).content, date: res.rows.item(i).date});
                }
            }
      } else {
          console.log("No results found");
      }
  }, function (err) {
      console.error(err);
  });
  
 //sort function
  $scope.sortNote = function(note) {
//    console.log(note);
    var date = new Date(note.date);
//    console.log(date);
    return date;
};

  //Edit Note Functions
  $scope.update = function(id, title, content){
    var ts = new Date();
    var date = ts.toISOString();
    var query = "UPDATE notes SET title =?, content =?, date =? WHERE id =?";
    $cordovaSQLite.execute(db, query, [title, content, date, id]).then(function(res) {
//        console.log("INSERT ID -> " + res.insertId);
      for (var i = 0; i < $scope.notes.length; i++){
        if ($scope.notes[i].id === id) {
          $scope.notes[i] = {id: id, title: title, content: content, date: date }
        }
      }
    }, function (err) {
        console.error(err);
    });
  }
   $ionicModal.fromTemplateUrl('templates/notes_edit_modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.editModal = modal;
  });
  
  $scope.editNote = function(id, title, content){
        console.log(id);
    console.log(title);
    console.log(content);
    $scope.editModal.modalEditNoteID = id;
    $scope.editModal.modalEditNoteTitle = title;
    $scope.editModal.modalEditNoteContent = content;
    $scope.editModal.show();
  }
  //Close and Cancel Edit modal
  $scope.closeEditModal = function() {
    $scope.editModal.hide();
    $scope.editModal.remove();
    $ionicModal.fromTemplateUrl('templates/notes_edit_modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.editModal = modal;
    });
  };
  //Close and Save addModal
  $scope.saveEditModal = function(id, modalEditNoteTitle, modalEditNoteContent) {
    $scope.update(id, modalEditNoteTitle, modalEditNoteContent);
    $scope.editModal.hide();
    $scope.editModal.remove();
    $ionicModal.fromTemplateUrl('templates/notes_edit_modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.editModal = modal;
    });
  };
  
  
  
  
  
  
  
  //Delete Functions
  $scope.deleteNote = function(note){
     $scope.showConfirm = function(note) {
       var confirmPopup = $ionicPopup.confirm({
         title: 'Delete Note',
         template: 'Are you sure you want to delete this note?'
       });
       confirmPopup.then(function(res) {
         if(res) {
            var query = "DELETE FROM notes where id = ?";
            $cordovaSQLite.execute(db, query, [note.id]).then(function(res) {
                $scope.notes.splice($scope.notes.indexOf(note), 1);
                $ionicListDelegate.closeOptionButtons();
            }, function (err) {
                console.error(err);
            });
         } else {
//           console.log('You are not sure');
         }
       });
     };
    $scope.showConfirm(note);
  }
  
  
  
  
  //Share Functions
  $scope.shareNote = function(content, title){
    $cordovaSocialSharing
    .share(content, title, null, 'http://www.guthyjacksonfoundation.org') // Share via native share sheet
    .then(function(result) {
      // Success!
      console.log('Share Success');
    }, function(err) {
      // An error occured. Show a message to the user
    });
  }
  
  
  
  
  
  
  //Add New Note Functions
  $scope.insert = function(title, content){  
    var ts = new Date();
    var date = ts.toISOString();
    var query = "INSERT INTO notes (title, content, date) VALUES (?,?,?)";
    $cordovaSQLite.execute(db, query, [title, content, date]).then(function(res) {
//        console.log("INSERT ID -> " + res.insertId);
        $scope.notes.push({id: res.insertId, title: title, content: content, date: date });

    }, function (err) {
        console.error(err);
    });
  }
  $ionicModal.fromTemplateUrl('templates/notes_add_modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.addModal = modal;
  });
  //Opens Add Modal
  $scope.openAddModal = function() {
    $scope.addModal.show();
  };
  //Close and Save addModal
  $scope.saveAddModal = function(modalAddNoteTitle, modalAddNoteContent) {
    $scope.insert(modalAddNoteTitle, modalAddNoteContent);
    $scope.addModal.hide();
    $scope.addModal.remove();
    $ionicModal.fromTemplateUrl('templates/notes_add_modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.addModal = modal;
    });
  };
  //Close and Cancel add modal
  $scope.closeAddModal = function() {
    $scope.addModal.hide();
    $scope.addModal.remove();
    $ionicModal.fromTemplateUrl('templates/notes_add_modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.addModal = modal;
    });
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.addModal.remove();
  });

  
})

.controller('NotesRevCtrl', function($scope, $ionicModal, $ionicPopup, $ionicListDelegate, $cordovaSQLite){
//  $scope.notes = NotesFactory.all();
  if(typeof analytics !== 'undefined') { analytics.trackView("Notes View"); }
  $scope.notes = [];
  $scope.searchNotes = '';
  var query = "SELECT id, title, content, date FROM notes";
  $cordovaSQLite.execute(db, query, []).then(function(res) {
      if(res.rows.length > 0) {
          if(res.rows.length > 0) {
                for(var i = 0; i < res.rows.length; i++) {
                    $scope.notes.push({id: res.rows.item(i).id, title: res.rows.item(i).title, content: res.rows.item(i).content, date: res.rows.item(i).date});
                }
            }
      } else {
          console.log("No results found");
      }
  }, function (err) {
      console.error(err);
  });
  
  
  $scope.trimCon = function(content){
    var z = content.split('\n');
    return z[0];
  }
  
  
 //sort function
  $scope.sortNote = function(note) {
//    console.log(note);
    var date = new Date(note.date);
//    console.log(date);
    return date;
};

  //Edit Note Functions
  $scope.update = function(id, title, content){
    var ts = new Date();
    var date = ts.toISOString();
    var query = "UPDATE notes SET title =?, content =?, date =? WHERE id =?";
    $cordovaSQLite.execute(db, query, [title, content, date, id]).then(function(res) {
//        console.log("INSERT ID -> " + res.insertId);
      for (var i = 0; i < $scope.notes.length; i++){
        if ($scope.notes[i].id === id) {
          $scope.notes[i] = {id: id, title: title, content: content, date: date }
        }
      }
    }, function (err) {
        console.error(err);
    });
  }
   $ionicModal.fromTemplateUrl('templates/notes_edit_modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.editModal = modal;
  });
  
  $scope.editNote = function(id, title, content){
        console.log(id);
    console.log(title);
    console.log(content);
    $scope.editModal.modalEditNoteID = id;
    $scope.editModal.modalEditNoteTitle = title;
    $scope.editModal.modalEditNoteContent = content;
    $scope.editModal.show();
  }
  //Close and Cancel Edit modal
  $scope.closeEditModal = function() {
    $scope.editModal.hide();
    $scope.editModal.remove();
    $ionicModal.fromTemplateUrl('templates/notes_edit_modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.editModal = modal;
    });
  };
  //Close and Save addModal
  $scope.saveEditModal = function(id, modalEditNoteTitle, modalEditNoteContent) {
    $scope.update(id, modalEditNoteTitle, modalEditNoteContent);
    $scope.editModal.hide();
    $scope.editModal.remove();
    $ionicModal.fromTemplateUrl('templates/notes_edit_modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.editModal = modal;
    });
  };
  
  
  
  
  
  
  
  //Delete Functions
  $scope.deleteNote = function(note){
     $scope.showConfirm = function(note) {
       var confirmPopup = $ionicPopup.confirm({
         title: 'Delete Note',
         template: 'Are you sure you want to delete this note?'
       });
       confirmPopup.then(function(res) {
         if(res) {
            var query = "DELETE FROM notes where id = ?";
            $cordovaSQLite.execute(db, query, [note.id]).then(function(res) {
                $scope.notes.splice($scope.notes.indexOf(note), 1);
                $ionicListDelegate.closeOptionButtons();
            }, function (err) {
                console.error(err);
            });
         } else {
//           console.log('You are not sure');
         }
       });
     };
    $scope.showConfirm(note);
  }
  
  
  
  
  //Share Functions
  $scope.shareNote = function(content, title){
    $cordovaSocialSharing
    .share(content, title, null, 'http://www.guthyjacksonfoundation.org') // Share via native share sheet
    .then(function(result) {
      // Success!
      console.log('Share Success');
    }, function(err) {
      // An error occured. Show a message to the user
    });
  }
  
  
  
  
  
  
  //Add New Note Functions
  $scope.insert = function(title, content){  
    var ts = new Date();
    var date = ts.toISOString();
    var query = "INSERT INTO notes (title, content, date) VALUES (?,?,?)";
    $cordovaSQLite.execute(db, query, [title, content, date]).then(function(res) {
//        console.log("INSERT ID -> " + res.insertId);
        $scope.notes.push({id: res.insertId, title: title, content: content, date: date });

    }, function (err) {
        console.error(err);
    });
  }
  $ionicModal.fromTemplateUrl('templates/notes_add_modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.addModal = modal;
  });
  //Opens Add Modal
  $scope.openAddModal = function() {
    $scope.addModal.show();
  };
  //Close and Save addModal
  $scope.saveAddModal = function(modalAddNoteTitle, modalAddNoteContent) {
    $scope.insert(modalAddNoteTitle, modalAddNoteContent);
    $scope.addModal.hide();
    $scope.addModal.remove();
    $ionicModal.fromTemplateUrl('templates/notes_add_modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.addModal = modal;
    });
  };
  //Close and Cancel add modal
  $scope.closeAddModal = function() {
    $scope.addModal.hide();
    $scope.addModal.remove();
    $ionicModal.fromTemplateUrl('templates/notes_add_modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.addModal = modal;
    });
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.addModal.remove();
  });

  
})

.controller('MainPageCtrl', function($scope, $ionicLoading, $ionicHistory, $ionicScrollDelegate, $timeout, $ionicModal){
  $scope.$on('$ionicView.enter', function(){
      $ionicHistory.clearCache();
      $ionicHistory.clearHistory();
//  console.log($ionicHistory.viewHistory());
  });

//  //Cleanup the modal when we're done with it!
//  $scope.$on('$destroy', function() {
//    $scope.modal.remove();
//  });
//  // Execute action on hide modal
//  $scope.$on('modal.hidden', function() {
//    // Execute action
//  });
//  // Execute action on remove modal
//  $scope.$on('modal.removed', function() {
//    // Execute action
//  });
//
//  $scope.$on('$ionicView.enter', function() {
//    $timeout(function() {
//      
//      $ionicModal.fromTemplateUrl('templates/walkthrough.html', {
//        scope: $scope,
//        animation: 'slide-in-up'
//      }).then(function(modal) {
//        $scope.modal = modal;
//      });
//      $scope.modal.show();
//    });
//  });
////
//  $scope.endWalkthrough = function(){
//        $scope.modal.hide();
//        $scope.modal.remove();
//  };
//  
  
})

.controller('SettingsCtrl', function($scope, $state, $ionicPopup, $ionicHistory, $cordovaSQLite){
$ionicHistory.clearHistory();
  $ionicHistory.clearCache();
  $scope.settings = [];
   if(typeof analytics !== 'undefined') { analytics.trackView("Settings View"); }
  
  $scope.isIOS = ionic.Platform.isIOS();
  $scope.isAndroid = ionic.Platform.isAndroid();
  
  var query = "SELECT id, name, value FROM settings";
  $cordovaSQLite.execute(db, query, []).then(function(res) {
      if(res.rows.length > 0) {
          if(res.rows.length > 0) {
                for(var i = 0; i < res.rows.length; i++) {
                    if(res.rows.item(i).name === 'fontSize'){
                      $scope.settings.fontSize = true;
                    }
                    if(res.rows.item(i).name === 'fontWeight'){
                      $scope.settings.fontWeight = true;
                    }
                    if(res.rows.item(i).name === 'bgImages'){
                      $scope.settings.bgImages = true;
                    }
                  console.log($scope.settings);
                }
            }
      } else {
//          console.log("No results found"); 
      }
  }, function (err) {
      console.error(err);
  });
  $scope.saveSettings = function(fontSize, fontWeight, bgImages){
    document.documentElement.removeAttribute('style');
    
    var sheetToBeRemoved = document.getElementById('bgImagesSheet');
    if(sheetToBeRemoved){
      var sheetParent = sheetToBeRemoved.parentNode;
    sheetParent.removeChild(sheetToBeRemoved);
    }
    
    
    $cordovaSQLite.execute(db, "DELETE FROM settings");
    if(fontSize === true){
      var query = "INSERT INTO settings (name, value) VALUES(?,?)";
      $cordovaSQLite.execute(db, query, ['fontSize', fontSize]).then(function(res) {
            document.documentElement.style.fontSize = "22px";
            document.documentElement.style.lineHeight = "26px";
      }, function (err) {
          console.error(err);
      });
    }
    if(fontWeight === true) {
      var query = "INSERT INTO settings (name, value) VALUES(?,?)";
      $cordovaSQLite.execute(db, query, ['fontWeight', fontWeight]).then(function(res) {
            document.documentElement.style.fontWeight = "700";
      }, function (err) {
          console.error(err);
      });
    }
    if(bgImages === true) {
      var query = "INSERT INTO settings (name, value) VALUES(?,?)";
      $cordovaSQLite.execute(db, query, ['bgImages', bgImages]).then(function(res) {
            var sheet = document.createElement('style')
                sheet.innerHTML = "h1.sunleaf, .welcome-parallax, .frnt-2 {background: #397633 !important;} .frnt-2 {height:auto !important; min-height:70px;}";
                 sheet.id = 'bgImagesSheet';
                document.body.appendChild(sheet);
      }, function (err) {
          console.error(err);
      });
    }
    $ionicPopup.alert({
        title: "Settings Updated",
        content: "Your new settings have been saved."
    }).then( function(res){
      
//      $ionicHistory.clearCache();
      $state.go('app.main_page', {}, {reload:true});
    });
  }
})

.controller('ResearchMenuCtrl', function($scope, $ionicPlatform){
   if(typeof analytics !== 'undefined') { analytics.trackView("Research Menu View"); }
   $ionicPlatform.ready(function() {
        if(window.Connection) {
          if(navigator.connection.type == Connection.NONE) {

            $scope.isConnected = false;

          } else {
            $scope.isConnected = true;
            if(typeof analytics !== 'undefined') { analytics.trackView("Latest Research View"); }
          }
      }
   });

})

.controller('ResearchOneCtrl', function($scope, $http, $ionicPlatform){
   $ionicPlatform.ready(function() {
        if(window.Connection) {
          if(navigator.connection.type == Connection.NONE) {
            $scope.isLoaded = true;
            $scope.isConnected = false;

          } else {
            $scope.isConnected = true;
            
          }
      }
   });
  if(typeof analytics !== 'undefined') { analytics.trackView("ICC Articles View"); }
    var url = "https://spreadsheets.google.com/feeds/list/1VdUXE0AYNZkCGmVHpQdH4FsxriPoeAKThjzuNnRBvJ8/od6/public/values?alt=json";

  $http.get(url)
    .success(function(data, status, headers, config){

       $scope.articles = data.feed.entry;
      
        $scope.isLoaded = true;

    })
    .error(function(data, status, headers, config){
      $scope.isLoaded = false;
    });
  $scope.openReseLink = function(article){
    var link = article.gsx$url.$t;
    window.open(link, '_blank', ''); return false;
  }
})

.controller('ResearchTwoCtrl', function($scope, $http, $ionicPlatform){
   $ionicPlatform.ready(function() {
        if(window.Connection) {
          if(navigator.connection.type == Connection.NONE) {
            $scope.isLoaded = true;
            $scope.isConnected = false;

          } else {
            $scope.isConnected = true;
            
          }
      }
   });
   if(typeof analytics !== 'undefined') { analytics.trackView("Treatment Articles View"); }
    var url = "https://spreadsheets.google.com/feeds/list/1PbXT9b2rwtxNVKY65IcIn8pNjU5x_7SZlvxBVJDMSeY/od6/public/values?alt=json";

  $http.get(url)
    .success(function(data, status, headers, config){
      $scope.articles = data.feed.entry;
      $scope.isLoaded = true;
    })
    .error(function(data, status, headers, config){
      $scope.isLoaded = false;
    });
  $scope.openReseLink = function(article){
    console.log('functoin');
    var link = article.gsx$url.$t;
    window.open(link, '_blank', ''); return false;
  }
})

.controller('AdreThreeCtrl', function($scope, $http, $ionicLoading,  $ionicPlatform){
    $ionicPlatform.ready(function() {
        if(window.Connection) {
          if(navigator.connection.type == Connection.NONE) {
            $scope.isLoaded = true;
            $scope.isConnected = false;

          } else {
            $scope.isConnected = true;
            if(typeof analytics !== 'undefined') { analytics.trackView("Latest Research View"); }
          }
      }
   });
   if(typeof analytics !== 'undefined') { analytics.trackView("Support Groups View"); }
    var url = "https://spreadsheets.google.com/feeds/list/1L57f3HKBM1tAz7-pa1idxi_IGgG5v0qDF91AFnCGpMY/od6/public/values?alt=json";

  $http.get(url)
    .success(function(data, status, headers, config){
       $scope.groups = data.feed.entry;
       $scope.isLoaded = true;
    })
    .error(function(data, status, headers, config){
      $scope.isLoaded = false;
    });
})

.controller('AdreFourCtrl', function($scope, $http,  $ionicPlatform){
    $ionicPlatform.ready(function() {
        if(window.Connection) {
          if(navigator.connection.type == Connection.NONE) {
            $scope.isLoaded = true;
            $scope.isConnected = false;

          } else {
            $scope.isConnected = true;
            if(typeof analytics !== 'undefined') { analytics.trackView("Latest Research View"); }
          }
      }
   });
   if(typeof analytics !== 'undefined') { analytics.trackView("FB Groups View"); }
    var url = "https://spreadsheets.google.com/feeds/list/11tzCq3BUT_wPDzRML8yaEjCxh8ppSu0ZFQRKvxLdKQs/od6/public/values?alt=json";

  $http.get(url)
    .success(function(data, status, headers, config){
       $scope.groups = data.feed.entry;
        $scope.isLoaded = true;
    })
    .error(function(data, status, headers, config){
        $scope.isLoaded = false;
    });
  $scope.openFBLink = function(group){
    var link = group.gsx$url.$t;
    window.open(link, '_system', ''); return false;
  }
});
    