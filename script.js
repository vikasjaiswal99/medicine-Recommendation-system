 const symptomData = {
  headache: {
    description: "A headache is pain or discomfort in the head, scalp, or neck. It can be caused by stress, dehydration, or tension.",
    medicines: ["Paracetamol", "Ibuprofen", "Aspirin"],
    precautions: [
      "Avoid bright lights.",
      "Stay hydrated.",
      "Avoid stress and rest in a quiet room."
    ],
    dietPlan: [
      "Include magnesium-rich foods like spinach and nuts.",
      "Avoid processed foods and caffeine.",
      "Drink plenty of water."
    ],
    meditation: "Practice mindfulness meditation or breathing exercises for 10-15 minutes daily to reduce stress.",
    yoga: ["Child's Pose", "Seated Forward Bend", "Legs-Up-The-Wall Pose"]
  },
  cold: {
    description: "The common cold is a viral infection of your nose and throat. Symptoms include sneezing, sore throat, and congestion.",
    medicines: ["Antihistamine", "Cough Syrup", "Vicks Vaporub"],
    precautions: [
      "Rest and drink plenty of fluids.",
      "Avoid going out in cold weather.",
      "Cover your mouth when sneezing."
    ],
    dietPlan: [
      "Consume vitamin C-rich foods like oranges and lemons.",
      "Drink warm soups and herbal teas.",
      "Avoid dairy products if it increases mucus."
    ],
    meditation: "Try guided imagery meditation to improve relaxation and immunity.",
    yoga: ["Cat-Cow Stretch", "Bridge Pose", "Reclining Twist"]
  },
  fever: {
    description: "Fever is a temporary increase in body temperature, often due to an infection.",
    medicines: ["Paracetamol", "Ibuprofen", "Acetaminophen"],
    precautions: [
      "Drink lots of fluids.",
      "Avoid wearing too many clothes.",
      "Rest and monitor your temperature."
    ],
    dietPlan: [
      "Consume light and easily digestible foods like porridge and fruits.",
      "Drink coconut water and herbal teas.",
      "Avoid oily and spicy foods."
    ],
    meditation: "Engage in body scan meditation to relax your body and promote healing.",
    yoga: ["Supported Bridge Pose", "Reclining Butterfly Pose"]
  },
   loose_motion: {
    description: "Loose motion, also known as diarrhea, involves frequent and watery bowel movements, often caused by infections, food poisoning, or digestive issues.",
    medicines: ["ORS (Oral Rehydration Solution)", "Loperamide", "Zinc Supplements"],
    precautions: [
      "Stay hydrated by drinking plenty of water and ORS.",
      "Avoid dairy, spicy, and greasy foods.",
      "Wash hands frequently to prevent infections."
    ],
    dietPlan: [
      "Consume bananas, rice, applesauce, and toast (BRAT diet).",
      "Drink clear soups and coconut water.",
      "Avoid caffeine, alcohol, and high-fiber foods."
    ],
    meditation: "Practice deep breathing exercises to reduce stress and calm the digestive system.",
    yoga: ["Child's Pose", "Wind-Relieving Pose", "Knee-to-Chest Pose"]
  },
  back_pain: {
    description: "Back pain is discomfort in the back that can be caused by muscle strain, poor posture, or injuries.",
    medicines: ["Ibuprofen", "Acetaminophen", "Muscle Relaxants"],
    precautions: [
      "Avoid lifting heavy objects.",
      "Maintain proper posture while sitting and standing.",
      "Use a firm mattress for sleeping."
    ],
    dietPlan: [
      "Eat anti-inflammatory foods like salmon, nuts, and leafy greens.",
      "Avoid processed foods and excessive sugar.",
      "Include calcium-rich foods such as dairy products."
    ],
    meditation: "Practice mindfulness meditation or guided breathing to relax the back muscles.",
    yoga: ["Cat-Cow Pose", "Child's Pose", "Cobra Pose"]
  },
  fatigue: {
    description: "Fatigue is a state of constant tiredness and lack of energy. It can be caused by physical exertion, poor sleep, or underlying health conditions.",
    medicines: ["Iron Supplements", "Vitamin B12", "Caffeine (in moderation)"],
    precautions: [
      "Get at least 7-8 hours of sleep each night.",
      "Avoid stress and take regular breaks.",
      "Stay hydrated and maintain a balanced diet."
    ],
    dietPlan: [
      "Eat energy-boosting foods like oats, bananas, and nuts.",
      "Avoid heavy meals that can make you feel sluggish.",
      "Include plenty of fruits and vegetables for vitamins and minerals."
    ],
    meditation: "Try relaxation techniques such as guided imagery to reduce fatigue.",
    yoga: ["Corpse Pose", "Legs-Up-The-Wall Pose", "Forward Fold Pose"]
  },
  dizziness: {
    description: "Dizziness is a feeling of lightheadedness, unsteadiness, or vertigo, which may be caused by low blood pressure, dehydration, or ear infections.",
    medicines: ["Meclizine", "Dimenhydrinate", "Vitamin D Supplements"],
    precautions: [
      "Avoid sudden movements.",
      "Sit or lie down if you feel dizzy.",
      "Drink plenty of fluids to stay hydrated."
    ],
    dietPlan: [
      "Consume foods high in potassium, like bananas and potatoes.",
      "Stay hydrated by drinking water and herbal teas.",
      "Avoid alcohol and caffeine."
    ],
    meditation: "Practice deep breathing and grounding exercises to alleviate dizziness.",
    yoga: ["Seated Forward Bend", "Child's Pose", "Standing Forward Bend"]
  },
  skin_rash: {
    description: "Skin rashes are irritations or inflammations of the skin, which can be caused by allergies, infections, or chronic conditions like eczema.",
    medicines: ["Hydrocortisone Cream", "Antihistamines", "Calamine Lotion"],
    precautions: [
      "Avoid scratching the affected area.",
      "Use gentle, fragrance-free skincare products.",
      "Avoid allergens that may trigger the rash."
    ],
    dietPlan: [
      "Consume anti-inflammatory foods such as turmeric, ginger, and green tea.",
      "Stay hydrated by drinking plenty of water.",
      "Avoid processed foods and sugars."
    ],
    meditation: "Meditate to manage stress, which may trigger flare-ups of skin conditions.",
    yoga: ["Child's Pose", "Seated Forward Fold", "Legs-Up-The-Wall Pose"]
  },
  insomnia: {
    description: "Insomnia is a condition characterized by difficulty falling or staying asleep, often caused by stress, anxiety, or poor sleep hygiene.",
    medicines: ["Melatonin", "Valerian Root", "Sedative Herbs"],
    precautions: [
      "Establish a regular sleep schedule.",
      "Avoid caffeine and electronic devices before bedtime.",
      "Create a comfortable and dark sleeping environment."
    ],
    dietPlan: [
      "Consume foods rich in magnesium and melatonin, like almonds and cherries.",
      "Avoid alcohol and heavy meals late at night.",
      "Drink calming herbal teas like chamomile and lavender."
    ],
    meditation: "Practice mindfulness meditation or progressive muscle relaxation before bed.",
    yoga: ["Legs-Up-The-Wall Pose", "Savasana", "Supta Baddha Konasana"]
  },
    dizziness: {
      description: "Dizziness is a feeling of lightheadedness or vertigo, often caused by dehydration, low blood pressure, or inner ear problems.",
      medicines: ["Meclizine", "Dimenhydrinate", "Vitamin D Supplements"],
      precautions: [
        "Avoid sudden movements.",
        "Sit or lie down if you feel dizzy.",
        "Drink plenty of fluids to stay hydrated."
      ],
      dietPlan: [
        "Consume foods high in potassium, like bananas and potatoes.",
        "Stay hydrated by drinking water and herbal teas.",
        "Avoid alcohol and caffeine."
      ],
      meditation: "Practice deep breathing and grounding exercises to alleviate dizziness.",
      yoga: ["Seated Forward Bend", "Child's Pose", "Standing Forward Bend"]
    },
    skin_rash: {
      description: "Skin rashes are irritations or inflammations of the skin, often caused by allergies, infections, or chronic conditions like eczema.",
      medicines: ["Hydrocortisone Cream", "Antihistamines", "Calamine Lotion"],
      precautions: [
        "Avoid scratching the affected area.",
        "Use gentle, fragrance-free skincare products.",
        "Avoid allergens that may trigger the rash."
      ],
      dietPlan: [
        "Consume anti-inflammatory foods such as turmeric, ginger, and green tea.",
        "Stay hydrated by drinking plenty of water.",
        "Avoid processed foods and sugars."
      ],
      meditation: "Meditate to manage stress, which may trigger flare-ups of skin conditions.",
      yoga: ["Child's Pose", "Seated Forward Fold", "Legs-Up-The-Wall Pose"]
    },
    anxiety: {
      description: "Anxiety is excessive worry or fear that can cause physical symptoms such as heart palpitations or dizziness.",
      medicines: ["Antidepressants", "Benzodiazepines", "Beta-Blockers"],
      precautions: [
        "Avoid excessive caffeine and alcohol.",
        "Engage in relaxing activities to reduce stress.",
        "Talk to a therapist or counselor."
      ],
      dietPlan: [
        "Consume magnesium-rich foods like spinach, avocado, and nuts.",
        "Avoid sugar and processed foods.",
        "Drink calming herbal teas such as chamomile."
      ],
      meditation: "Practice mindfulness meditation to reduce anxiety levels.",
      yoga: ["Child's Pose", "Legs-Up-The-Wall Pose", "Seated Forward Fold"]
    },
    nausea: {
      description: "Nausea is the feeling of queasiness in the stomach, often leading to vomiting. It can be caused by motion sickness, pregnancy, or foodborne illnesses.",
      medicines: ["Dramamine", "Pepto-Bismol", "Ginger Tablets"],
      precautions: [
        "Avoid strong smells or foods that trigger nausea.",
        "Rest in a comfortable position.",
        "Sip ginger tea or take ginger supplements."
      ],
      dietPlan: [
        "Consume bland foods such as crackers and toast.",
        "Drink clear liquids like ginger tea or coconut water.",
        "Avoid greasy, spicy, or fatty foods."
      ],
      meditation: "Practice deep breathing exercises to reduce nausea and stress.",
      yoga: ["Seated Forward Bend", "Child's Pose", "Corpse Pose"]
    },
    migraine: {
      description: "Migraine is a severe headache often accompanied by nausea and sensitivity to light and sound.",
      medicines: ["Sumatriptan", "Ibuprofen", "Acetaminophen"],
      precautions: [
        "Avoid triggers such as bright lights and loud noises.",
        "Lie down in a dark, quiet room.",
        "Stay hydrated and avoid skipping meals."
      ],
      dietPlan: [
        "Consume magnesium-rich foods like leafy greens and almonds.",
        "Avoid foods that trigger migraines, such as chocolate and cheese.",
        "Drink water and herbal teas regularly."
      ],
      meditation: "Practice meditation to reduce stress and manage pain.",
      yoga: ["Child's Pose", "Seated Forward Bend", "Cat-Cow Pose"]
    },
    fever: {
      description: "Fever is an increase in body temperature often due to infection or inflammation.",
      medicines: ["Paracetamol", "Ibuprofen", "Acetaminophen"],
      precautions: [
        "Drink plenty of fluids to stay hydrated.",
        "Rest and monitor your temperature.",
        "Avoid over-bundling, as it can increase body temperature."
      ],
      dietPlan: [
        "Eat light, easily digestible foods like soup and broths.",
        "Consume fruits rich in vitamin C like oranges and strawberries.",
        "Avoid caffeine and processed foods."
      ],
      meditation: "Engage in calming meditation practices to ease discomfort.",
      yoga: ["Child's Pose", "Legs-Up-The-Wall Pose", "Corpse Pose"]
    },
    constipation: {
      description: "Constipation is a condition where bowel movements are infrequent or difficult to pass.",
      medicines: ["Laxatives", "Fiber Supplements", "Probiotics"],
      precautions: [
        "Increase fiber intake.",
        "Drink plenty of water.",
        "Exercise regularly to promote bowel movement."
      ],
      dietPlan: [
        "Consume fiber-rich foods such as fruits, vegetables, and whole grains.",
        "Drink at least 8 glasses of water daily.",
        "Avoid processed foods and dairy products."
      ],
      meditation: "Practice relaxation techniques to reduce stress, which may affect digestion.",
      yoga: ["Seated Forward Fold", "Wind-Relieving Pose", "Child's Pose"]
    },
    cough: {
      description: "Coughing is a reflex action to clear the airways of mucus or irritants.",
      medicines: ["Cough Syrup", "Dextromethorphan", "Honey"],
      precautions: [
        "Avoid cold air and pollutants.",
        "Stay hydrated to soothe the throat.",
        "Cover your mouth when coughing or sneezing."
      ],
      dietPlan: [
        "Consume warm liquids like herbal tea and honey lemon water.",
        "Avoid spicy or acidic foods.",
        "Eat foods rich in vitamin C to support the immune system."
      ],
      meditation: "Use deep breathing exercises to soothe irritation in the throat.",
      yoga: ["Child's Pose", "Seated Forward Fold", "Breath of Fire"]
    },
    swollen_lymph_nodes: {
      description: "Swollen lymph nodes indicate infection or inflammation in the body, often due to a cold, flu, or infection.",
      medicines: ["Antibiotics", "Pain Relievers", "Warm Compress"],
      precautions: [
        "Rest and avoid strenuous activities.",
        "Drink plenty of fluids to stay hydrated.",
        "Consult a doctor if swelling persists."
      ],
      dietPlan: [
        "Consume foods rich in vitamin C to boost immunity.",
        "Stay hydrated with water and herbal teas.",
        "Avoid processed and sugary foods."
      ],
      meditation: "Meditate to reduce stress and improve overall immunity.",
      yoga: ["Child's Pose", "Downward Dog", "Legs-Up-The-Wall Pose"]
    },
    chest_pain: {
      description: "Chest pain can be a symptom of various conditions, from muscle strain to serious heart conditions.",
      medicines: ["Aspirin", "Nitroglycerin", "Pain Relievers"],
      precautions: [
        "Seek immediate medical attention if chest pain is severe or accompanied by other symptoms.",
        "Avoid strenuous physical activity.",
        "Stay calm and rest until help arrives."
      ],
      dietPlan: [
        "Consume heart-healthy foods like oatmeal, nuts, and leafy greens.",
        "Avoid fatty, fried, and processed foods.",
        "Drink plenty of water and avoid caffeinated drinks."
      ],
      meditation: "Practice deep breathing and relaxation techniques to reduce stress on the heart.",
      yoga: ["Cat-Cow Pose", "Savasana", "Child's Pose"]
    },
    high_blood_pressure: {
      description: "High blood pressure, or hypertension, increases the risk of heart disease and stroke.",
      medicines: ["ACE Inhibitors", "Diuretics", "Beta-Blockers"],
      precautions: [
        "Limit salt intake and eat a balanced diet.",
        "Engage in regular physical activity.",
        "Monitor blood pressure regularly."
      ],
      dietPlan: [
        "Eat foods rich in potassium, like bananas, tomatoes, and sweet potatoes.",
        "Avoid foods high in sodium and trans fats.",
        "Consume whole grains and lean proteins."
      ],
      meditation: "Practice mindfulness or progressive muscle relaxation to manage stress.",
      yoga: ["Child's Pose", "Seated Forward Fold", "Warrior Pose"]
    },   
      abdominal_pain: {
        description: "Abdominal pain refers to discomfort or pain in the stomach area, which can be caused by various factors such as indigestion, infections, or more serious conditions like appendicitis.",
        medicines: ["Antacids", "Proton Pump Inhibitors", "Pain Relievers"],
        precautions: [
          "Avoid heavy or greasy foods.",
          "Rest and avoid physical exertion.",
          "Seek medical attention if the pain persists or worsens."
        ],
        dietPlan: [
          "Consume bland foods like bananas, rice, and toast.",
          "Drink clear liquids like herbal teas or water.",
          "Avoid caffeine and alcohol."
        ],
        meditation: "Engage in mindfulness meditation to reduce stress that may exacerbate the pain.",
        yoga: ["Child's Pose", "Seated Forward Bend", "Wind-Relieving Pose"]
      },
      shortness_of_breath: {
        description: "Shortness of breath or dyspnea is the sensation of not getting enough air, often caused by asthma, heart disease, or lung conditions.",
        medicines: ["Bronchodilators", "Inhalers", "Steroids"],
        precautions: [
          "Avoid strenuous activities and high altitudes.",
          "Keep prescribed medications close at hand.",
          "Consult a doctor if breathlessness occurs unexpectedly."
        ],
        dietPlan: [
          "Consume heart-healthy foods rich in omega-3 fatty acids, like salmon.",
          "Increase intake of antioxidants from fruits and vegetables.",
          "Avoid smoking and secondhand smoke."
        ],
        meditation: "Practice deep breathing exercises like diaphragmatic breathing to calm the respiratory system.",
        yoga: ["Lion's Breath", "Seated Forward Fold", "Bridge Pose"]
      },
      joint_pain: {
        description: "Joint pain refers to discomfort, pain, or inflammation in the joints, often caused by arthritis, overuse, or injury.",
        medicines: ["NSAIDs", "Corticosteroids", "Pain Relievers"],
        precautions: [
          "Avoid repetitive movements that stress the joint.",
          "Rest and apply cold or warm compresses to the affected area.",
          "Maintain a healthy weight to reduce pressure on the joints."
        ],
        dietPlan: [
          "Consume foods rich in omega-3 fatty acids, such as walnuts and flaxseeds.",
          "Increase intake of calcium-rich foods like dairy and leafy greens.",
          "Avoid processed foods high in sugar and trans fats."
        ],
        meditation: "Practice guided meditation to alleviate stress, which can worsen pain.",
        yoga: ["Warrior II", "Child's Pose", "Seated Spinal Twist"]
      },
      sore_throat: {
        description: "A sore throat is a painful irritation of the throat that can be caused by infections, dry air, or allergies.",
        medicines: ["Throat Lozenges", "Pain Relievers", "Antibiotics (if bacterial)"],
        precautions: [
          "Stay hydrated and avoid dehydration.",
          "Gargle with salt water for relief.",
          "Avoid smoking and exposure to irritants."
        ],
        dietPlan: [
          "Consume warm liquids like herbal teas and broths.",
          "Avoid acidic or spicy foods that may irritate the throat.",
          "Eat soft, soothing foods like mashed potatoes or soup."
        ],
        meditation: "Practice relaxation techniques to reduce the discomfort of a sore throat.",
        yoga: ["Child's Pose", "Corpse Pose", "Breath of Fire"]
      },
      excessive_thirst: {
        description: "Excessive thirst, or polydipsia, can be a sign of dehydration, diabetes, or kidney problems.",
        medicines: ["Insulin (for diabetes)", "Diuretics", "Electrolyte Replenishers"],
        precautions: [
          "Monitor fluid intake and drink water regularly.",
          "Avoid sugary drinks, which can worsen dehydration.",
          "Consult a doctor if thirst persists."
        ],
        dietPlan: [
          "Consume water-rich foods like cucumbers and watermelon.",
          "Avoid caffeinated and alcoholic beverages.",
          "Maintain a balanced diet with proper hydration."
        ],
        meditation: "Practice mindfulness to manage stress, which can contribute to excessive thirst.",
        yoga: ["Child's Pose", "Seated Forward Fold", "Legs-Up-The-Wall Pose"]
      },
      frequent_urination: {
        description: "Frequent urination is a condition where a person feels the need to urinate more often than usual, often caused by urinary tract infections or diabetes.",
        medicines: ["Diuretics", "Antibiotics", "Alpha-blockers"],
        precautions: [
          "Avoid excessive consumption of caffeinated drinks.",
          "Drink plenty of water to flush out toxins.",
          "Consult a doctor if the condition worsens or is accompanied by pain."
        ],
        dietPlan: [
          "Consume foods that help support bladder health, such as cranberries and apples.",
          "Avoid spicy foods and acidic foods that may irritate the bladder.",
          "Maintain hydration but avoid drinking excessive amounts of liquids at once."
        ],
        meditation: "Practice meditation to alleviate stress, which may affect bladder function.",
        yoga: ["Child's Pose", "Seated Forward Bend", "Legs-Up-The-Wall Pose"]
      },
      swollen_ankles: {
        description: "Swollen ankles can be caused by fluid retention, injury, or medical conditions such as heart failure or kidney disease.",
        medicines: ["Diuretics", "Pain Relievers", "Compression Socks"],
        precautions: [
          "Elevate the legs to reduce swelling.",
          "Limit salt intake to prevent water retention.",
          "Seek medical attention if swelling is severe or persistent."
        ],
        dietPlan: [
          "Consume potassium-rich foods like bananas to balance fluids.",
          "Avoid foods high in sodium, which can worsen fluid retention.",
          "Drink plenty of water to aid in fluid balance."
        ],
        meditation: "Engage in relaxation practices to reduce stress and improve circulation.",
        yoga: ["Legs-Up-The-Wall Pose", "Child's Pose", "Downward Dog"]
      },
      hot_flashes: {
        description: "Hot flashes are sudden feelings of warmth, often experienced by women during menopause, caused by hormonal fluctuations.",
        medicines: ["Hormone Replacement Therapy", "Antidepressants", "Clonidine"],
        precautions: [
          "Avoid triggers like spicy foods and hot drinks.",
          "Dress in layers to adjust to temperature changes.",
          "Stay cool and hydrated."
        ],
        dietPlan: [
          "Consume foods rich in phytoestrogens like soy and flaxseeds.",
          "Eat light meals to avoid overheating.",
          "Drink plenty of water and avoid alcohol."
        ],
        meditation: "Practice deep breathing and mindfulness to manage stress associated with hot flashes.",
        yoga: ["Child's Pose", "Seated Forward Fold", "Savasana"]
      },
      bruising: {
        description: "Bruising occurs when blood vessels beneath the skin break, often caused by trauma or certain medical conditions that affect blood clotting.",
        medicines: ["Arnica", "Vitamin K Cream", "Pain Relievers"],
        precautions: [
          "Avoid activities that increase the risk of injury.",
          "Apply cold compresses to reduce swelling and bruising.",
          "Seek medical attention if bruising occurs without any known injury."
        ],
        dietPlan: [
          "Consume vitamin C-rich foods like citrus fruits to aid in healing.",
          "Eat foods rich in vitamin K, like leafy greens.",
          "Stay hydrated to support tissue repair."
        ],
        meditation: "Meditate to reduce stress, which can increase the risk of injury.",
        yoga: ["Child's Pose", "Seated Forward Fold", "Reclining Bound Angle Pose"]
      },
      ear_pain: {
        description: "Ear pain is discomfort in or around the ear, often caused by infections, earwax buildup, or sinus issues.",
        medicines: ["Pain Relievers", "Antibiotics", "Ear Drops"],
        precautions: [
          "Avoid inserting objects into the ear canal.",
          "Keep ears dry and avoid water exposure.",
          "Seek medical attention if pain persists or is accompanied by hearing loss."
        ],
        dietPlan: [
          "Consume anti-inflammatory foods like turmeric and ginger.",
          "Drink warm liquids like herbal teas to soothe the throat and ears.",
          "Stay hydrated to help clear ear infections."
        ],
        meditation: "Practice relaxation techniques to ease tension in the ear and head area.",
        yoga: ["Child's Pose", "Forward Fold", "Savasana"]
      },
      dry_skin: {
        description: "Dry skin, or xerosis, is a condition where the skin becomes rough, flaky, and cracked, often caused by cold weather, dehydration, or skin conditions like eczema.",
        medicines: ["Moisturizers", "Hydrocortisone Cream", "Ceramide Creams"],
        precautions: [
          "Avoid hot showers that can dry out the skin.",
          "Use mild, fragrance-free soaps and lotions.",
          "Drink plenty of water and moisturize regularly."
        ],
        dietPlan: [
          "Consume foods rich in omega-3 fatty acids, such as salmon and flaxseeds.",
          "Eat hydrating foods like cucumbers and watermelon.",
          "Avoid caffeine and alcohol that can dehydrate the skin."
        ],
        meditation: "Meditate to relieve stress, which can exacerbate dry skin conditions.",
        yoga: ["Child's Pose", "Seated Forward Fold", "Legs-Up-The-Wall Pose"]
      },
      fatigue: {
        description: "Fatigue is a feeling of extreme tiredness or lack of energy, often caused by physical, mental, or emotional strain.",
        medicines: ["Iron Supplements", "Vitamin B12", "Antidepressants"],
        precautions: [
          "Get adequate sleep and rest.",
          "Manage stress with relaxation techniques.",
          "Eat a balanced diet and stay hydrated."
        ],
        dietPlan: [
          "Consume foods rich in iron like spinach, beans, and red meat.",
          "Eat foods high in vitamin B12 such as eggs and dairy.",
          "Avoid excessive caffeine and sugar."
        ],
        meditation: "Practice mindfulness meditation to help reduce stress and promote relaxation.",
        yoga: ["Child's Pose", "Corpse Pose", "Savasana"]
      },
      numbness_or_tingling: {
        description: "Numbness or tingling is often felt in the extremities, and may be caused by nerve compression, diabetes, or circulation issues.",
        medicines: ["Gabapentin", "Pregabalin", "Topical Analgesics"],
        precautions: [
          "Avoid sitting or standing in one position for long periods.",
          "Wear comfortable shoes and socks to avoid irritation.",
          "Manage underlying conditions like diabetes."
        ],
        dietPlan: [
          "Consume foods rich in vitamin B12, such as fish and fortified cereals.",
          "Eat magnesium-rich foods like leafy greens and bananas.",
          "Stay hydrated to support nerve function."
        ],
        meditation: "Practice deep breathing exercises to relax the nervous system.",
        yoga: ["Mountain Pose", "Downward Dog", "Cat-Cow Pose"]
      },
      blurred_vision: {
        description: "Blurred vision refers to a decrease in the sharpness or clarity of sight, often caused by refractive errors, cataracts, or eye strain.",
        medicines: ["Antibiotic Eye Drops", "Steroid Eye Drops", "Artificial Tears"],
        precautions: [
          "Rest your eyes regularly and reduce screen time.",
          "Wear prescribed glasses or contact lenses.",
          "Get regular eye exams."
        ],
        dietPlan: [
          "Consume foods rich in vitamin A like carrots and sweet potatoes.",
          "Eat foods high in antioxidants such as berries and leafy greens.",
          "Avoid excessive sugar intake, which can affect eye health."
        ],
        meditation: "Practice eye relaxation exercises to reduce strain and improve focus.",
        yoga: ["Forward Fold", "Child's Pose", "Seated Meditation"]
      },
      excessive_sweating: {
        description: "Excessive sweating, or hyperhidrosis, is the production of more sweat than the body needs to regulate temperature.",
        medicines: ["Antiperspirants", "Botox Injections", "Oral Medications (Anticholinergics)"],
        precautions: [
          "Wear breathable, moisture-wicking clothing.",
          "Avoid triggers like hot environments and spicy foods.",
          "Use antiperspirants and keep areas clean and dry."
        ],
        dietPlan: [
          "Eat cooling foods like cucumbers, watermelon, and yogurt.",
          "Stay hydrated to regulate body temperature.",
          "Avoid excessive caffeine and alcohol."
        ],
        meditation: "Practice calming exercises to reduce anxiety, which may exacerbate sweating.",
        yoga: ["Child's Pose", "Standing Forward Bend", "Mountain Pose"]
      },
      loss_of_appetite: {
        description: "Loss of appetite refers to a decreased desire to eat, often caused by illness, stress, or digestive disorders.",
        medicines: ["Appetite Stimulants", "Anti-nausea Drugs", "Steroids"],
        precautions: [
          "Try eating small, frequent meals.",
          "Avoid heavy or spicy foods that may cause discomfort.",
          "Manage underlying conditions like anxiety or gastrointestinal issues."
        ],
        dietPlan: [
          "Consume nutrient-dense foods like smoothies and soups.",
          "Eat high-protein snacks such as nuts or yogurt.",
          "Stay hydrated with water, herbal teas, and clear broths."
        ],
        meditation: "Practice relaxation techniques like deep breathing to reduce stress and improve appetite.",
        yoga: ["Seated Forward Fold", "Cat-Cow Pose", "Savasana"]
      },
      hiccups: {
        description: "Hiccups are involuntary contractions of the diaphragm muscle, often caused by overeating, drinking carbonated beverages, or stress.",
        medicines: ["Antipsychotic Medications", "Baclofen", "Chlorpromazine"],
        precautions: [
          "Avoid drinking carbonated drinks and eating too quickly.",
          "Breathe into a paper bag to increase carbon dioxide levels.",
          "Avoid stress and anxiety that could trigger hiccups."
        ],
        dietPlan: [
          "Consume smaller, more frequent meals.",
          "Avoid spicy or irritating foods.",
          "Drink warm liquids like herbal tea or warm water."
        ],
        meditation: "Engage in deep, slow breathing exercises to help regulate the diaphragm.",
        yoga: ["Seated Forward Fold", "Child's Pose", "Breath of Fire"]
      },
      loss_of_balance: {
        description: "Loss of balance can be caused by inner ear problems, neurological disorders, or vestibular issues.",
        medicines: ["Vestibular Suppressants", "Anti-nausea Medications", "Dizziness Treatment Medications"],
        precautions: [
          "Avoid sudden movements or turning your head too quickly.",
          "Use assistive devices like walking aids to prevent falls.",
          "Consult a healthcare provider to address underlying causes."
        ],
        dietPlan: [
          "Consume foods high in vitamin D and calcium to support bone health.",
          "Eat foods rich in magnesium to support nerve function.",
          "Stay hydrated to avoid dehydration, which can affect balance."
        ],
        meditation: "Practice grounding exercises to maintain focus and stability.",
        yoga: ["Tree Pose", "Warrior Pose", "Mountain Pose"]
      },
      chest_tightness: {
        description: "Chest tightness is the feeling of pressure or discomfort in the chest, often associated with heart conditions, respiratory issues, or anxiety.",
        medicines: ["Nitroglycerin", "Beta-Blockers", "Anti-anxiety Medications"],
        precautions: [
          "Seek immediate medical attention if chest tightness is severe or accompanied by other symptoms.",
          "Avoid physical exertion and stress until the underlying cause is identified.",
          "Monitor and manage any chronic conditions such as asthma or heart disease."
        ],
        dietPlan: [
          "Consume heart-healthy foods like whole grains, vegetables, and fish.",
          "Avoid foods high in salt, sugar, and unhealthy fats.",
          "Drink water and herbal teas to stay hydrated."
        ],
        meditation: "Practice deep breathing and relaxation exercises to reduce stress.",
        yoga: ["Child's Pose", "Savasana", "Downward Dog"]
      },
      high_blood_pressure: {
        description: "High blood pressure, or hypertension, increases the risk of heart disease and stroke.",
        medicines: ["ACE Inhibitors", "Diuretics", "Beta-Blockers"],
        precautions: [
          "Limit salt intake and eat a balanced diet.",
          "Engage in regular physical activity.",
          "Monitor blood pressure regularly."
        ],
        dietPlan: [
          "Eat foods rich in potassium like bananas, tomatoes, and sweet potatoes.",
          "Avoid foods high in sodium and trans fats.",
          "Consume whole grains and lean proteins."
        ],
        meditation: "Practice mindfulness or progressive muscle relaxation to manage stress.",
        yoga: ["Child's Pose", "Seated Forward Fold", "Warrior Pose"]
      }
    };
// function recommendMedicine() {
//   const symptomInput = document.getElementById('symptom-input').value.toLowerCase().replace(/ /g, "_");
//   const recommendationsDiv = document.getElementById('recommendations');
//   recommendationsDiv.innerHTML = '';

//   if (symptomData[symptomInput]) {
//     const symptom = symptomData[symptomInput];

//     // Display description
//     let description = `<h2>Description:</h2><p>${symptom.description}</p>`;

//     // Display medicines
//     let medicineList = `<h2>Medicines:</h2><ul>`;
//     symptom.medicines.forEach(medicine => {
//       medicineList += `<li>${medicine}</li>`;
//     });
//     medicineList += `</ul>`;

//     // Display precautions
//     let precautionList = `<h2>Precautions:</h2><ul>`;
//     symptom.precautions.forEach(precaution => {
//       precautionList += `<li>${precaution}</li>`;
//     });
//     precautionList += `</ul>`;

//     // Display diet plan
//     let dietPlan = `<h2>Diet Plan:</h2><ul>`;
//     symptom.dietPlan.forEach(item => {
//       dietPlan += `<li>${item}</li>`;
//     });
//     dietPlan += `</ul>`;

//     // Display meditation
//     let meditation = `<h2>Meditation:</h2><p>${symptom.meditation}</p>`;

//     // Display yoga
//     let yoga = `<h2>Yoga Poses:</h2><ul>`;
//     symptom.yoga.forEach(pose => {
//       yoga += `<li>${pose}</li>`;
//     });
//     yoga += `</ul>`;

//     // Show the recommendations
//     recommendationsDiv.innerHTML = description + medicineList + precautionList + dietPlan + meditation + yoga;
//   } else {
//     recommendationsDiv.innerHTML = '<p>No recommendations available for this symptom. Please try again with a different symptom.</p>';
//   }
// }

async function recommendMedicine() {
  const symptomInput = document.getElementById('symptom-input').value;

  try {
      const response = await fetch('http://localhost:3000/recommendations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ symptom: symptomInput })
      });

      if (response.ok) {
          const data = await response.json();
          displayRecommendations(data);
      } else {
          document.getElementById('recommendations').innerHTML = '<p>No recommendations available for this symptom.</p>';
      }
  } catch (error) {
      console.error("Error fetching recommendations:", error);
      document.getElementById('recommendations').innerHTML = '<p>An error occurred. Please try again later.</p>';
  }
}

function displayRecommendations(data) {
  const recommendationsDiv = document.getElementById('recommendations');
  recommendationsDiv.innerHTML = `
      <h2>Description:</h2><p>${data.description}</p>
      <h2>Medicines:</h2><ul>${data.medicines.map(med => `<li>${med}</li>`).join('')}</ul>
      <h2>Precautions:</h2><ul>${data.precautions.map(prec => `<li>${prec}</li>`).join('')}</ul>
      <h2>Diet Plan:</h2><ul>${data.dietPlan.map(item => `<li>${item}</li>`).join('')}</ul>
      <h2>Meditation:</h2><p>${data.meditation}</p>
      <h2>Yoga Poses:</h2><ul>${data.yoga.map(pose => `<li>${pose}</li>`).join('')}</ul>
  `;
}

