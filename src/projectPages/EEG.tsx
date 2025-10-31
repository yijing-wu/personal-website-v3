import { useLayoutEffect } from "react";

import { BackButton, Text } from "../MyLibrary";
import { highlightStyle } from "../MyLibrary/MyStyles";
import { myMilkYellow, myTextLightGrey } from "../MyLibrary/MyColors";

import {
  ComparisonPrefrontalandVisualCortex,
  eeg5ChanelsInPrefrontalCortex,
  eeg5ChanelsInVisualCortex,
  eeg128channels,
  eegEquipments,
  experimentProcessTimeline,
  experimentTaskCategories,
  IMFComparsion,
  modelConstructionProcess,
  nestedCrossValidation,
  RadiusTraversalofCTM,
  validityAnalysis,
  workingMemory,
} from "../assets/projects/eeg";

export default function EEG() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="project-page">
      <BackButton />
      <Text style={{ fontSize: 20, color: myTextLightGrey }}>
        <h1 style={{ color: myMilkYellow, marginTop: 30 }}>
          Classification of EEG Signals during Working Memory Maintenance
        </h1>
        {/* Hightlights content is the same as experienceData of Digital Image Lab */}
        <div>
          Hightlights:
          <ul>
            <li style={{ marginBottom: 4 }}>
              Constructed classification models of brain during working memory
              maintenance based on 128-channel EEG dataset for material-specific
              Sternberg task through feature selection and machine learning with{" "}
              <div style={highlightStyle}>{` Python `}</div>
            </li>
            <li style={{ marginBottom: 4 }}>
              Extracted features of EEG signals by empirical mode decomposition
              (EMD) and phase space reconstruction (PSR){" "}
            </li>
            <li style={{ marginBottom: 4 }}>
              Executed Support Vector Machine (SVM), K-nearest neighbor (KNN),
              Random Forest (RF), and nested cross-validation{" "}
            </li>
            <li style={{ marginBottom: 4 }}>
              Accomplished improvement of classification performance from 71.45%
              to 91.82% under SVM and published the result in an
              <div style={highlightStyle}>{` IEEE `}</div> paper as the{" "}
              <div style={highlightStyle}>{` first author `}</div>
            </li>
          </ul>
        </div>

        <br />
        <hr />
        <br />

        <div>
          <h3>1. Background</h3>
          <p>
            Working memory is an important part of the cognitive processing of
            the brain. It has the dual function of short-term processing and
            storage of information, and it can affect a variety of cognitive
            tasks of the brain. It has great reference value for the diagnosis
            and treatment of diseases related to brain cognitive dysfunction,
            such as Alzheimer's disease, epilepsy, aphasia, and schizophrenia.
            At the same time, it can also be used to study the cognitive
            processing process of the brain and understand the neural activity
            mechanism of the brain.
          </p>
          <div className="figure">
            <img
              src={workingMemory}
              width="40%"
              alt="figure1.1 Working Memory"
            />
            <div className="figure-footnote"> figure1.1 Working Memory </div>
          </div>
          <p>
            Usually, we can use fMRI (functional magnetic resonance imaging),
            EEG (electroencephalography), and other methods to explore working
            memory-related neural activities. Our research use EEG signals as
            the research object.
          </p>
          <div className="figure">
            <img
              src={eegEquipments}
              width="40%"
              alt="figure1.2 EEG Equipments"
            />
            <div className="figure-footnote"> figure1.2 EEG Equipments </div>
          </div>
          <p>
            We use an EEG cap similar to that shown in Figure 1.2 to collect EEG
            signals. The electrodes on the EEG cap will record the activity of
            the brain by tracking the voltage changes at various locations in
            the brain.
          </p>
          <p>
            While here comes the problem that EEG signals are hard to
            distinguish, the differences between them are small. Besides, the
            EEG signals are nonlinear, and non-stationary their statistical
            parameters change significantly over time. What's more, due to the
            existence of eye movement artifacts, EMG interference, power
            frequency interference, etc., the EEG signal has very strong
            background noise.
          </p>
          <p>
            Therefore, we need to find a suitable feature extraction method to
            construct a model to study the cognitive processing of the brain.
          </p>
          <h3>2. Dataset</h3>
          <p>
            The dataset of these continuous EEG recordings has been acquired
            from material-specific Sternberg tasks working memory experiments. A
            group of twenty healthy German, aged between 18 and 30 years with no
            history of neurological or psychiatric disorders, volunteered to be
            subjects.{" "}
          </p>
          <p>
            In the tasks, the subjects were required to memorize two categories
            of memory materials, pictures (Faces / Houses) or characters
            (Digits/Letters), as shown in Figure 2.1.{" "}
          </p>
          <div className="figure">
            <img
              src={experimentTaskCategories}
              width="60%"
              alt="figure2.1 Experiment Task Categorie"
            />
            <div className="figure-footnote">
              {" "}
              figure2.1 Experiment Task Categories
            </div>
          </div>
          <p>
            There are 80 trials experiments of each category of memory
            materials. For each trial, the subject will be shown a series of
            simulation screens. All the simulation screens showed for 100ms in
            random order one category followed by a 4s maintenance interval.
            After that, the experimenters showed a picture and let the subject
            choose whether or not have seen the picture in the previous series.
            Subjects needed to retrieve the materials that they memorized and
            decided whether they had seen the item in the previous picture
            sequence and indicate their decision by pressing keys. The maximum
            decision time was 5s. At the end of the trial was an interval
            lasting 1s. We mainly focus on the EEG data of the 4s working memory
            maintenance interval.
          </p>
          <div className="figure">
            <img
              src={experimentProcessTimeline}
              width="60%"
              alt="figure2.2 Experiment Process Timeline"
            />
            <div className="figure-footnote">
              {" "}
              figure2.2 Experiment Process Timeline
            </div>
          </div>
          <p>
            Throughout the experiment, 128-channel EEG was recorded. Here we
            mainly focused on the 5 channels in the prefrontal cortex and the 5
            channels in the visual cortex. Channels locations are shown in
            Figure 2.4 and Figure2.5. The sampling rate of the EEG signals is
            1000Hz. About 40 trials were carried out for each sub-condition
            (Face/House/Digital/ Letter). We obtained a 2x128x4000x80 matrix for
            one subject. During the signal acquisition, those signals that were
            too noisy were marked as bad trails. The rest good trials (about
            80%) of raw time-domain EEG data were used.{" "}
          </p>
          <div className="figure">
            <img
              src={eeg128channels}
              width="50%"
              alt="figure2.3 EEG 128 channels"
            />
            <div className="figure-footnote"> figure2.3 EEG 128 channels</div>
          </div>
          <div className="figure">
            <img
              src={eeg5ChanelsInPrefrontalCortex}
              width="30%"
              alt="figure2.4 EEG 5 Chanels In Prefrontal Cortex"
            />
            <div className="figure-footnote">
              {" "}
              figure2.4 EEG 5 Channels In Prefrontal Cortex
            </div>
          </div>
          <div className="figure">
            <img
              src={eeg5ChanelsInVisualCortex}
              width="30%"
              alt="figure2.5 EEG 5 Chanels In Visual Cortex"
            />
            <div className="figure-footnote">
              {" "}
              figure2.5 EEG 5 Channels In Visual Cortex
            </div>
          </div>
          <h3>3. Model Construction</h3>
          <p>The model construction process is shown in Figure 3.1.</p>
          <div className="figure">
            <img
              src={modelConstructionProcess}
              width="80%"
              alt="figure3.1 Model Construction Process"
            />
            <div className="figure-footnote">
              {" "}
              figure3.1 Model Construction Process{" "}
            </div>
          </div>
          <p>
            First, we screened the EEG data of five channels in the visual area
            and prefrontal cortex from the 128 channels. Since we need to
            extract information from the non-stationary signals, we applied
            empirical mode decomposition(EMD) to decompose each signal to obtain
            its intrinsic mode functions (IMF). And then used phase space
            reconstruction to conduct nonlinear analysis of the signals. In
            order to extract features from the phase space reconstruction map,
            we used central trend measurement for feature extraction to obtain
            eigenvalue.
          </p>
          <p>
            In this way, we can convert a piece of 4000ms EEG data into a set of
            feature vectors. And we did the same processing to all the data of
            five channels and obtained five sets of feature vectors. Then we can
            put them into classifiers for classification according to the
            classification task. We mainly used SVM. For comparison, Naive Bayes
            and Deep Forest are also been conducted.{" "}
          </p>
          <p>
            As all classification experiments are based on a single subject
            which is a small sample dataset, we also applied grid search and
            nested cross-validation for hyperparameter tuning.
          </p>
          <div className="figure">
            <img
              src={nestedCrossValidation}
              width="60%"
              alt="figure3.2 Nested Cross Validation"
            />
            <div className="figure-footnote">
              {" "}
              figure3.2 Nested Cross Validation{" "}
            </div>
          </div>
          <h3>4. Result & Discussion</h3>
          <h4>4.1 Radius Traversal of Central Trendency Measurement</h4>
          <p>
            We traverse different radii to select the radius for the central
            tendency measurement. We only use PSR to conduct feature selection
            of the EEG signals of five channels in the visual cortex. Then took
            0.5 as a step, traverse the radius between 0.5 and 10, apply three
            classifiers, SVM, Naive Bayes, and Deep Forest to get the
            classification result under different radii.
          </p>
          <div className="figure">
            <img
              src={RadiusTraversalofCTM}
              width="60%"
              alt="figure4.1 Radius Traversal of CTM"
            />
            <div className="figure-footnote">
              {" "}
              figure4.1 Radius Traversal of CTM{" "}
            </div>
          </div>
          <p>
            The result in Figure4.1 shows the mean of the results of twenty
            subjects. Firstly, We can be found that in the task of
            classification between image and character, each radius can
            effectively achieve classification. This means that the central
            tendency measure feature is effective in the working memory
            classification task.
          </p>
          <p>
            Secondly, The orange line is the result of the SVM classifier. we
            can see that the performance of the SVM classifier is better than
            the one of Naive Bayes and Deep Forest.
          </p>
          <p>
            Thirdly, it can be found that the classification performance reaches
            the best when the radius R=1. Therefore, we will use R=1 as the
            radius parameter of the central trend measure in the following
            studies.
          </p>
          <h4>4.2 Analysis of the Effectiveness of Feature Extraction </h4>
          <p>
            The next result is about the effectiveness of the feature extraction
            model. We select the five channels of the visual cortex and use the
            result from 4.1, which is the radius R of the central trend
            measurement equals 1. We compare four different types of features
            under the task of classification between pictures and characters.{" "}
          </p>
          <div className="figure">
            <img
              src={validityAnalysis}
              width="60%"
              alt="figure4.2 Validity Analysis"
            />
            <div className="figure-footnote"> figure4.2 Validity Analysis </div>
          </div>
          <p>
            The blue one is the result of classification by 128 full channels
            without any feature extraction. The red one is the result of
            classification without any feature extraction for the five channels
            of the visual cortex. It can be found that when the number of
            channels is reduced, the classification performance decreases
            significantly. However, using 128 full-channel EEG signals to
            analyze is expensive, and impractical, so it is very necessary to
            reduce the channel.
          </p>
          <p>
            The gray part is the classification result of only applying the
            phase space of the five channels in the visual cortex. The yellow
            part is the classification result of applying empirical mode
            decomposition and phase space reconstruction. It can be found that
            compared with the five-channel results of the visual cortex without
            any feature extraction, the classification performance of these two
            methods with feature extraction is gradually improved, and the
            variance is gradually reduced, indicating that the classification
            results are becoming more accurate and steady.
          </p>
          <p>
            Furthermore, the result under SVM is better than Naive Bayes and
            Deep Forest. This is consistent with result 1.
          </p>
          <p>
            Based on the conclusion above, we can think that the features
            extracted based on empirical mode decomposition and phase space
            reconstruction are effective classification features for working
            memory tasks, which means that we can know whether the subject's
            thoughts during this 4000ms working memory maintenance period belong
            to images or characters.
          </p>
          <h4>4.3 Comparison of IMF component </h4>
          <p>
            The third result is the comparison of the classification performance
            of each IMF component of the empirical mode decomposition under SVM.
            The five channels of the visual area are also selected, and the
            radius of the central trendy measurement equals 1.
          </p>
          <div className="figure">
            <img
              src={IMFComparsion}
              width="60%"
              alt="figure4.3 IMF Comparsion"
            />
            <div className="figure-footnote"> figure4.3 IMF Comparsion </div>
          </div>
          <p>
            Figure 4.3 shows the results under the task of classifying images
            and characters. It can be found that the first intrinsic mode
            function IMF1 has the best classification performance. From the
            principle of EMD decomposition, we can know that IMF1 contains more
            high-frequency components in the signal. This shows that the
            high-frequency components of the signal are more important in the
            working memory task.
          </p>
          <h4>4.4 Comparison between Prefrontal Cortex and Visual Cortex </h4>
          <div className="figure">
            <img
              src={ComparisonPrefrontalandVisualCortex}
              width="60%"
              alt="figure4.4 Comparison of Prefrontal Cortex and Visual Cortex"
            />
            <div className="figure-footnote">
              {" "}
              figure4.4 Comparison of Prefrontal Cortex and Visual Cortex
            </div>
          </div>
          <p>
            We choose the prefrontal cortex, which is the most commonly used in
            working memory research, for comparison with the visual cortex. We
            can find from figure 4.4 that both of these two cortexes can be
            effectively classified after feature extraction.
          </p>
          <p>
            The result proves again that the features extracted based on EMD and
            PSR are effective classification features in working memory tasks.
            In addition, regardless of whether feature extraction is performed
            or not, under the three different classifiers, the accuracy and
            variance of the results of the prefrontal cortex are better than
            those of the visual cortex, but the difference between the two is
            not too great, which shows that the prefrontal cortex plays an
            important role in working memory tasks, while the visual cortex also
            has great impact.
          </p>
          <p></p>
          <h3>5. Summary</h3>
          <ol>
            <li>
              Constructed A classification model of the brain working memory
              tasks based on EMD and PSR.
            </li>
            <li>
              Demonstrated that EMD and PSR-based features are effective
              features in working memory tasks
            </li>
            <li>
              Proved EMD high-frequency components have a more important role in
              working memory tasks.
            </li>
            <li>
              Found The visual cortex also plays an important role in working
              memory.
            </li>
          </ol>
          <h3>6. References</h3>
          <ol>
            <li>
              Y. Wu, H. Qian, X. Yang, H. Chu, C. Yan and X. Gong,
              "Classification of EEG signals during Working- Memory Maintenance
              based on Phase Space Reconstruction of Empirical Mode
              Decomposition," 2020 13th International Congress on Image and
              Signal Processing, BioMedical Engineering and Informatics
              (CISP-BMEI), 2020, pp. 675-680, doi:
              10.1109/CISP-BMEI51763.2020.9263576.
            </li>
            <li>
              Pachori, Ram Bilas and Varun Bajaj. “Analysis of normal and
              epileptic seizure EEG signals using empirical mode decomposition.”
              Computer methods and programs in biomedicine 104 3 (2011): 373-81
              .
            </li>
            <li>
              Oweis, R.J., Abdulhay, E.W. Seizure classification in EEG signals
              utilizing Hilbert-Huang transform. BioMed Eng OnLine 10, 38
              (2011). https://doi.org/10.1186/1475-925X-10-38
            </li>
            <li>
              Bhattacharyya, A., Singh, L., Pachori, R.B. (2019). Identification
              of Epileptic Seizures from Scalp EEG Signals Based on TQWT. In:
              Tanveer, M., Pachori, R. (eds) Machine Intelligence and Signal
              Analysis. Advances in Intelligent Systems and Computing, vol 748.
              Springer, Singapore. https://doi.org/10.1007/978-981-13-0923-6_18
            </li>
            <li>
              Brignol A, Al-Ani T, Drouot X. Phase space and power spectral
              approaches for EEG-based automatic sleep-wake classification in
              humans: a comparative study using short and standard epoch
              lengths. Comput Methods Programs Biomed. 2013 Mar;109(3):227-38.
              doi: 10.1016/j.cmpb.2012.10.002. Epub 2012 Nov 16. PMID: 23164523.
            </li>
          </ol>
        </div>
      </Text>
    </div>
  );
}
