angular.module('starter.controllers', [])


.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

//    // Form data for the login modal
//    $scope.loginData = {};
//
//    // Create the login modal that we will use later
//    $ionicModal.fromTemplateUrl('templates/login.html', {
//        scope: $scope
//    }).then(function (modal) {
//        $scope.modal = modal;
//    });
//
//    // Triggered in the login modal to close it
//    $scope.closeLogin = function () {
//        $scope.modal.hide();
//    };
//
//    // Open the login modal
//    $scope.login = function () {
//        $scope.modal.show();
//    };
//
//    // Perform the login action when the user submits the login form
//    $scope.doLogin = function () {
//        console.log('Doing login', $scope.loginData);
//
//        // Simulate a login delay. Remove this and replace with your login
//        // code if using a login system
//        $timeout(function () {
//            $scope.closeLogin();
//        }, 1000);
//    };

})
.factory('FaqsFactory', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var faqs = [
            { id: 1, title : 'What is NMO?', content : 'NMO stands for neuromyelitis optica, originally known as Devic’s Disease. NMO is currently an incurable but treatable autoimmune disorder. The body’s immune system attacks its own healthy cells, most commonly in the optic nerves and spinal cord. It can cause temporary or permanent blindness and/or paralysis, and may have periods of remission and relapse.' },
           { id: 2, title : 'What causes NMO?', content : 'At present, the specific cause(s) of NMO are unknown. However, most experts believe that NMO results from a dysfunction in immune tolerance, which is the immune system’s ability to distinguish one’s own cells or proteins from potentially foreign materials.' , video: "http://www.youtube.com/embed/SewcOjEz0Ss?controls=0&amp;showinfo=0&amp;rel=0" },
           { id: 3, title : 'How common is NMO?', content : 'Based on recent epidemiologic reports, there are an estimated 4,000 cases in the United States and a half million worldwide. As with many autoimmune conditions, females are affected by the disease more commonly than males, at an approximate ratio of 6:1. NMO can affect both children and adults.', video : 'http://www.youtube.com/embed/PS9ZiYOdnxk?controls=0&amp;showinfo=0&amp;rel=0' },
           { id: 4, title : ' How frequent are NMO relapses (also called attacks) ?', content : 'The time interval between relapses or attacks can range from days, weeks, months or even years apart. Some cases have been known to have attacks 15 years apart. In some patients there is only one episode (no relapses), but such cases are relatively uncommon.', video : 'http://www.youtube.com/embed/UP1lXFZC-0E?controls=0&amp;showinfo=0&amp;rel=0' },
           { id: 5, title : 'What are NMO symptoms?', content : 'NMO symptoms can vary from person to person and may resemble MS symptoms in many ways. NMO is most commonly characterized by inflammation of the spinal cord and/or optic nerves, causing any one or more of the following symptoms:\n- Rapid onset of eye pain or loss of vision (optic neuritis).\n- Limb weakness, numbness, or partial paralysis (transverse myelitis).\n- Shooting pain or tingling in the neck, back or abdomen.\n- Loss of bowel and bladder control.\n- Prolonged nausea, vomiting or hiccups.\nSometimes these symptoms are temporary, and resolve on their own. In any case, it is important to discuss these symptoms with your doctor to help consider NMO in your diagnosis.', video : 'http://www.youtube.com/embed/bsdpAtQf8Kg?controls=0&amp;showinfo=0&amp;rel=0' },
           { id: 6, title : 'How is NMO diagnosed?', content : 'There are currently several methods that can be utilized alone or together to diagnose NMO:\n- Specific laboratory tests that detect hallmark NMO IgG antibody (simple blood test).\n- Magnetic resonance imaging (MRI) to check for spinal cord lesions.\n- Ophthalmology studies such as optical coherence tomography (OTC) to check for telltale damage to the optic nerve or retina.\n- Tests to rule out other closely related disorders such as multiple sclerosis.', video : 'http://www.youtube.com/embed/cMDCGMytlE8?controls=0&amp;showinfo=0&amp;rel=0' },
           { id: 7, title : ' Is the NMO IgG antibody test foolproof?', content : 'No. Most NMO IgG tests list a 5-10% chance of a false-positive result, or a 20-30% chance of false negative result. The most commonly used laboratory test for NMO antibody was created in 2000 at the Mayo Clinic.', video : 'http://www.youtube.com/embed/rt-dMF3QkQw?controls=0&amp;showinfo=0&amp;rel=0' },
           { id: 8, title : ' How do I get the NMO IgG antibody test?', content : 'Your primary care physician or neurologist can order the NMO IgG antibody test.', video : 'http://www.youtube.com/embed/xXuXJu571oM?controls=0&amp;showinfo=0&amp;rel=0' },
           { id: 9, title : ' How can I help my primary care physician to consult with an NMO specialist?', content : 'The GJCF “Connect the Docs” webpage provides contact information for neurologists and other clinicians in the U.S. and throughout the world who specialize in diagnosing and treating NMO. ', video : 'http://www.youtube.com/embed/Gk3BOGe6WVs?controls=0&amp;showinfo=0&amp;rel=0' },
           { id: 10, title : 'My primary care physician has never heard of NMO. Does this make him/her a bad clinician?', content : 'No. Many clinicians and neurologists have never seen an NMO patient and are not aware of this rare disease.', video : 'http://www.youtube.com/embed/btWVUKT6VFc?controls=0&amp;showinfo=0&amp;rel=0' },
           { id: 11, title : 'Is there a possibility that NMO may be misdiagnosed as Multiple Sclerosis (MS)?', content : 'Yes. NMO is sometimes misdiagnosed as MS. The treatments for these distinct conditions can be very different, and recent reports suggest that some agents used to treat MS may be ineffective in NMO or actually make NMO symptoms worse.', video : 'http://www.youtube.com/embed/2EZvpyqPcy8?controls=0&amp;showinfo=0&amp;rel=0' },
           { id: 12, title : 'Is NMO a form of Multiple Sclerosis (MS)?', content : 'Until recently, NMO was thought to be a type of Multiple Sclerosis. However, recent discoveries indicate that NMO and MS are distinct diseases. With so many symptoms in common, NMO can sometimes be confused with MS or other diseases. But these diseases are treated in different ways and early detection and treatment help ensure best outcomes. For these reasons, it is important to seek clinical care as soon as possible if symptoms occur.', video : 'http://www.youtube.com/embed/ek__omkNgjg?controls=0&amp;showinfo=0&amp;rel=0' },
           { id: 13, title : 'How do clinicians treat NMO?', content : 'At present, treatment of NMO is targeted at two facets of the disease:\n 1. Control tissue inflammation and damage at onset or during relapse\n 2. Prevent further tissue damage by reducing the frequency of relapse.', video : 'http://www.youtube.com/embed/Qd-EuQ_huiU?controls=0&amp;showinfo=0&amp;rel=0' },
           { id: 14, title : 'What are the treatments for NMO relapses?', content : 'Acute NMO relapses or attacks are often treated with:\n- Corticosteroids (steroid treatment)\n- Plasmapheresis (the removal of antibodies from the blood stream)\nPlasmapheresis is often used if steroid treatment is ineffective. Some clinicians use plasmapheresis on a limited scale in cases where patients show poor tolerance for other agents used to prevent relapses.' },
           { id: 15, title : 'How are NMO attacks prevented?', content : 'The most common immunosuppressive agents used by NMO specialists to prevent NMO attacks include:\n- Azathioprine (trade name, Immuran; oral)\n- Mycophenolate (trade name, CellCept; oral)\n- Rituximab (trade name, Rituxan; intravenous infusion)\nRelapse prevention medications can be very helpful but may not be 100% effective.' },
           { id: 16, title : 'Do clinicians prefer one drug treatment over another?', content : 'As with many aspects of medicine, neurologists including NMO specialists may have certain preferences for one treatment regimen over another. Selection of a treatment regimen depends on many individual factors such as symptoms, disease severity, whether the treatment is well-tolerated, cost, and other factors.', video : 'http://www.youtube.com/embed/sg1-a7CWmUg' },
           { id: 17, title : 'Do these treatments have dangerous side effects?', content : 'As with the treatment of any disease, certain NMO treatments can have side effects, including serious adverse events such as infection. However, recent reports suggest that treatment efficacy is improving, and the benefits far outweigh the negative side effects in preventing or resolving severe attacks. It is always best to consult with your physician and/or an NMO specialist to determine which treatment regimen may be best for you.', video : 'http://www.youtube.com/embed/HJGpTSJBo28?controls=0&amp;showinfo=0&amp;rel=0' },
           { id: 18, title : 'If taking immunosuppressive therapy, is it OK to take over-the-counter herbal remedies and/or vitamin supplements?', content : 'It is always best to consult with your physician and/or an NMO specialist regarding over-the-counter herbal remedies and/or vitamin supplements in relation to your NMO treatment regimen.' },
           { id: 19, title : 'What are key points to keep in mind if I am taking immunosuppressive therapy?', content : 'All immunosuppressive therapies reduce the ability of your immune system to fight against infection and cancer. In addition, wound healing may be slower, and dental health compromised. Preventative exams such as mammograms, pap smears, dermatology full-body exams, and dental hygiene should be done regularly. It is also important to pay attention to public health hygiene by considering the basic rules of protecting yourself against transmissible diseases:\n- Wash your hands regularly and thoroughly with soap and water\n- Avoid touching your eyes, nose, mouth, or face\n- Avoid interacting with people who may be sick, coughing or sneezing\n- If you feel a cold or fever coming on, consult your physician immediately', video : 'http://www.youtube.com/embed/fSsWj8QiNs8?controls=0&amp;showinfo=0&amp;rel=0' },
           { id: 20, title : 'How broken is my immune system if I have NMO?', content : 'The immune system is one of the most powerful yet mysterious of all the systems in the human body. Intensive research is being conducted to understand the specific causes of NMO, identify new and more effective treatments that prevent relapses, and ultimately find ways to reset the immune system with the intention to solve NMO. It may even be possible to use the immune system itself to do so.', video : 'http://www.youtube.com/embed/N601-kOsKjY?controls=0&amp;showinfo=0&amp;rel=0' },
           { id: 21, title : 'Can tissues injured by NMO be repaired?', content : 'It is not known if the body can heal damage to the spinal cord, optic nerves or brain caused by NMO. It is possible that by preventing relapses, these tissues may repair themselves over time. However, it is also possible that tissue caused by NMO may be irreversible. Ongoing studies are being conducted to find ways to repair tissue damaged by NMO.', video : 'http://www.youtube.com/embed/UeR6YwY_cRs?controls=0&amp;showinfo=0&amp;rel=0' },
           { id: 22, title : 'I haven’t had an NMO attack or flare-up for a long time, can I stop taking my medication or decrease its dosage?', content : 'Because NMO can stay in remission for long periods of time, even years, it is important to consult with your physician and/or an NMO specialist to determine ongoing therapy.' },
           { id: 23, title : 'Should NMO patients receive standard vaccinations against infectious diseases?', content : 'Vaccinations are not known to cause NMO, and the benefits of immunization to protect against infection far outweigh risks. However, certain vaccines may not be advisable in the setting of specific types of immunosuppressive therapy. It is always best to consult with your physician and/or an NMO specialist to determine the best vaccine schedule in your case.', video : 'http://www.youtube.com/embed/0AqLwjVK2yM?controls=0&amp;showinfo=0&amp;rel=0' },
           { id: 24, title : 'Are there specific agents approved by the Food and Drug Administration (FDA) to treat NMO?', content : 'No, at this time there is no NMO-specific therapy. Agents used to treat NMO are approved to treat conditions other than NMO, but may be recommended by a neurologist or NMO specialist for use in treating NMO.' },
           { id: 25, title : 'What are B cells and why are they important?', content : 'B cells are a special type of white blood cell that produces antibody. Because the NMO-IgG antibody is believed to play a role in causing NMO disease or relapse, B cells that make NMO-IgG are considered targets for NMO therapy. For example, rituximab targets and eliminates certain types of B cells that may produce NMO-IgG antibody. B cell monitoring is often used for patients after receiving rituximab infusions, which are often four-to-six months apart.', video : 'http://www.youtube.com/embed/Oo9YrqQrXMA' },
           { id: 26, title : 'Can I get Stem-Cell treatment for NMO?', content : 'At the present time, the effectiveness of stem cell therapies for NMO is unknown. Consult with your physician and/or an NMO specialist.', video : 'http://www.youtube.com/embed/nRsmUU7x0rg' },
           { id: 27, title : 'Does one-step or monophasic NMO exist?', content : 'Usually NMO occurs as a series of episodes or relapses. However, in approximately 10% of patients, it appears that a form of monophasic NMO exists. These patients may suffer from an acute episode of optic neuritis in one or both eyes, and have other hallmark signs such as transverse myelitis, but have no relapses. However, it is difficult to tell if such patients are in a long remission period, or have the monophasic form of disease, so drug treatment is usually continued.', video : 'http://www.youtube.com/embed/UP1lXFZC-0E?controls=0&amp;showinfo=0&amp;rel=0' },
           { id: 28, title : 'What is transverse myelitis?', content : 'Transverse myelitis is a medical term describing a condition in which inflammation is seen by MRI or other imaging methods to affect a section of the spinal cord. Inflammation can damage or destroy spinal cord, optic nerve, or brain tissue, including the protein insulation (myelin) that covers nerve cells.' },
           { id: 29, title : 'What is optic neuritis?', content : 'Optic neuritis is caused by damage to the optic nerve due to acute or chronic inflammation. The optic nerve carries visual information from the eye to the brain. Inflammation of the optic nerve can cause damage to the myelin sheath covering it. Optic neuritis may occur in the form of loss of color vision, reduced visual field, and other symptoms. Optic neuritis is a serious condition that can lead to progressive vision loss or even blindness. Minimizing or preventing damage to the optic nerve is one of the primary reasons to seek medical care immediately if symptoms of optic neuritis occur or relapse.', video : 'http://www.youtube.com/embed/4Nw464s6-I4?controls=0&amp;showinfo=0&amp;rel=0' }
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
  // Might use a resource here that returns a JSON array

  // Some fake testing data
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

.factory('CTFaqsFactory', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var faqs = [
            { id: 1, title : 'What is Clinical Research?', content : 'Clinical research is medical research that involves patients. Patients, called subjects in clinical research, volunteer to participate in carefully designed and conducted studies seeking to find better ways to prevent, diagnose, treat, and eventually cure human disease. These advances come with improved understanding of the causes and effects of the disease. Clinical research includes clinical trials and clinical studies in which new treatments and strategies are tested in hopes of improving the health and wellness of patients. In addition, clinical research can focus on clinical science, which assesses discovery aspects of medicine, including disease onset or relapse risks, genetics, epidemiology, and other features associated with cause or variable manifestations of disease. All clinical research is required to adhere to careful protection of subjects and their information, and in the United States clinical trials in particular are regulated and monitored by the U.S. Food and Drug Administration (FDA) and the National Institutes of Health (NIH). Respective agencies in other countries follow similar practices' },
           { id: 2, title : 'Why do we need clinical trials?', content : 'Clinical trials are designed to determine which medicines or procedures best benefit patients, and which may not. These studies often involve expert teams from academic, governmental and pharmaceutical sectors. In some cases, clinical trials seek to test the efficacy of a new drug for a disease which has no proven effective therapy. In other trials, one treatment is compared with another to examine which may be best in patients of differing disease stage or condition. Clinical trials are usually divided into different “phases”, each of which is designed to address a slightly different question:\n\nPhase I: usually designed to test the “safety” and to learn the best dosing regimen of a new drug to minimize side effects. Subjects are usually healthy volunteers, and the study is often relatively short in duration. Subjects do not usually benefit from a Phase I study.\n\nPhase II: usually designed to study the drug based on results from Phase I. Here, the drug, device, or procedure is evaluated in volunteer subjects who have the disease of interest. Phase II trials further refine safety, minimize adverse events, and begin to explore if and how the test agent may benefit the subject. Some volunteer subjects may benefit from a Phase II study.\n\nPhase III: usually compares the test candidate (drug, device, or procedure) to a commonly used agent that has been proven to be at least somewhat effective in treating a condition, if one exists. This phase is designed to understand if the test agent is better than existing approaches, and where the agent might best fit in managing a particular disease.' , video: "http://www.youtube.com/embed/p5KxUfz6BIo?controls=0&amp;showinfo=0&amp;rel=0" },
            { id: 3, title : 'Why do people participate in clinical trials?', content : 'People participate in clinical trials for many reasons. Healthy individuals often say they participate to help others and to contribute to new or better ways to prevent or treat disease. Volunteers who have a disease also participate to help others, but may also receive new or improved experimental treatments. In addition, subjects who are involved in clinical trials receive additional care and attention from the clinical trial staff. Sometimes, blood relatives of the patients with diseases participate in certain trials which evaluate the genetic components that may pose potential disease risks.' },
           { id: 4, title : 'Who participates in clinical trials?', content : 'People from all walks of life participate in clinical trials. Some are healthy, while others may have illnesses. Sometimes, blood or genetic relatives of a subject suffering from an illness can participate together in a clinical trial. Usually, each clinical trial or study specifies which subjects may participate. These terms are called the Inclusion Criteria or Exclusion Criteria. Factors that allow someone to participate in a clinical trial are "inclusion criteria." Those that exclude or not allow participation are "exclusion criteria." These criteria are based on factors such as age, gender, the type and stage of a disease, previous treatment history, and other medical conditions. Before joining a clinical trial, a participant must qualify for the study. Some research studies seek participants with illnesses or conditions to be studied in the clinical trial, others may need healthy volunteers whereas, some others, require both.'  },
            { id: 5, title : 'What do I need to know if I am thinking about participating?', content : 'Clinical trials involve risks, just as routine medical care and the activities of daily living. However, all clinical trials are designed to minimize such risks. Institutional and regulatory agencies carefully monitor clinical trials before they are allowed to begin, and during their performance, to ensure risks are minimized and any adverse events are addressed promptly. A clinical trial can be halted if a treatment is found by interim analysis to have unacceptable side effects, lack of efficacy (termed futility), or even exceptional efficacy. If safe and feasible, participating in a clinical trial to its completion is the best way to maximize the information learned from that trial. It is also important to note that a subject can choose to exit a clinical trial at any time for any reason. When weighing the risks of clinical research, each person may consider several important factors, including the potential for: \n\n1. improved therapeutic benefit(s)\n\n2. advancing knowledge in the field\n\n3. adverse outcomes or other issues\n\n Risks to subjects participating in clinical trials can be minor, serious, or even life-threatening side effects to established or experimental treatments, or placebo. The study may require more time and attention than a standard treatment regimen would, including more frequent visits to a study site. Important science is also done in most clinical trials. This work may involve additional blood tests or procedures, or other clinical activities. Some study participants experience complications that require medical attention. In rare cases, participants have been seriously injured or have died of complications resulting from their participation in trials of experimental therapies.\n\nNo matter how promising or effective a new treatment may seem, clinical trials are essential for it to be specifically approved by regulatory agencies for use in treating NMO. Potential benefits of participating in a clinical trial also include the chance for each NMO patient to play an active and important role in advancing knowledge in NMO health care, and possibly gaining access to new treatment being tested in the trial. It should be noted that some trials involve placebo groups, which may not receive an experimental or existing treatment regimen. In any case, participating in a clinical trial assures regular and careful medical attention from an expert clinical and research team that includes doctors and other health care professionals.\n\nThe specific risks associated with a clinical trial protocol are described in detail in the informed consent process (also see below). In this process, individuals considering participation in a clinical trial are provided detailed information about the purpose of the trial, the drug or drugs being evaluated, the potential benefits and risks, as well as the schedule of clinical visits, duration of the trial, and other information. Potential subjects are afforded time to carefully consider this information, and raise any questions or concerns they may have. Only when a potential subject is fully informed and satisfied that their questions or concerns have been addressed by a physician or other members of the clinical research team are they invited to sign an informed consent document. Signing the informed consent is the starting point for enrollment in the clinical trial and participating in it.\n\nIt is in the best interests of all concerned that patients and caregivers be as informed as possible to aid in their personal decisions when considering participation in a clinical trial.\n\n' , video: "http://www.youtube.com/embed/LOFQm9WhWOE?controls=0&amp;showinfo=0&amp;rel=0" },
           { id: 6, title : 'What happens after a clinical trial is completed?', content : 'After a clinical trial is completed, the researchers carefully examine information collected during the study. The analysis includes evaluation of potential benefits as well as potential risks. Statistical and other quantitative assessments of the data are also carefully reviewed before any assertions are made by the trial investigators or sponsors. In addition, the entire package of study results and analysis may be submitted to regulatory agencies for review and potential approval for use in treating NMO. Each of these steps is part of the process to best determine the meaning of the findings and potential need for further testing. After each trial phase, industry sponsors decide whether to advance to the next phase, or to stop testing the agent or intervention for a variety of reasons, including efficacy, adverse events, and other relevant factors.\n\nIdeally, results from clinical trials are published in peer-reviewed academic journals, regardless of outcome. Peer review is a process by which objective experts in the field review the data and interpretations thereof before publication to ensure that any analysis and conclusions are supported by the evidence. If the results are particularly important, they may be featured in news media and discussed at scientific meetings and by patient advocacy groups after they are published. Once a new approach has been proven safe and effective in a clinical trial that is reviewed and approved by appropriate regulatory agencies, it may become an option or a standard of medical practice.'  },
            { id: 7, title : 'What is the NMO clinical trial information email group list?', content : 'The NMO Clinical Trial Email Information Group List is an opportunity for you to sign up to receive email notifications about NMO clinical trials. Joining the email list does not mean you are signing up for a clinical trial. Rather, joining the group simply indicates that you are interested in receiving news and latest information regarding clinical science or clinical trials focusing on NMO. Importantly, the Foundation does not share your contact information with any other third parties, or for marketing, advertising or profitable services.' },
            { id: 8, title : 'What types of questions might I ask if I am considering joining a clinical trial?', content : 'If you are considering enrolling in a clinical trial, it is important that you ask any questions or bring up any issues concerning the trial at any time. The following suggestions may give you some ideas as you think about your own questions:\n\nThe Study\n\nWhat is the purpose of the study?\nWho will fund the study?\nWho has reviewed and approved the study?\nHow are study results and safety of participants being monitored?\nHow long will the study last?\nWhat will my responsibilities be if I participate?\nWhat are the possible risks and benefits?\nWhat are my possible short-term benefits?\nWhat are my possible long-term benefits?\nWhat are my short-term risks, such as side effects?\nWhat are my possible long-term risks?\nWho pays for my medical care in relation to the trial?\nWhat happens if I experience an adverse event in the trial?\nCan I exit the trial at any time for any reason if I wish?\nWhat other options do people with my disease have?\nHow do the possible risks and benefits of this trial compare with those options?\n\nParticipation and Care\n\nWhat kinds of therapies, procedures and /or tests will I have during the trial?\nWill they hurt, and if so, for how long?\nHow do the tests in the study compare with those I would have outside of the trial?\nWill I be able to take my regular medications while in the clinical trial?\nWhere will I have my medical care?\nWho will be in charge of my care?\nPersonal issues\nHow could being in this study affect my daily life?\nCan I talk to other people in the study?\n\nA key step in enrolling in a clinical trial is called informed consent. In this step, each potential subject will be carefully and thoroughly informed of the details of the trial, and encouraged to ask any questions about any aspect of the trial design, purpose, clinical investigators, or industry sponsor. Only when all questions or concerns have been addressed, and qualification is determined based on inclusion and exclusion criteria, is a patient invited to sign the informed consent document to begin enrollment as a clinical trial subject. ' , video: "http://www.youtube.com/embed/LOFQm9WhWOE?controls=0&amp;showinfo=0&amp;rel=0"  },
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
    $scope.vidlist[i].videourl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $scope.vidlist[i].videoId + '?controls=0&amp;showinfo=0&amp;rel=0');
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
      $scope.vidlist[i].videourl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $scope.vidlist[i].videoId + '?controls=0&amp;showinfo=0&amp;rel=0'); 
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
    console.log(note);
    var date = new Date(note.date);
    console.log(date);
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

//.controller('SideMenuCtrl', function($scope, $state, $ionicHistory){
//  $scope.$on('$ionicView.afterLeave',	function(){
//   
//     $ionicHistory.clearCache();
//  });
//})


//Settings Page
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
    