import React from 'react';

const DataScience = ({ onClose }) => {
    return (
        <div className='skill_component'>
            <h2 className='skill_page_title'>Data Science</h2>

            <div className='skill_page_content'>

                <p>
                    I have took massive courses and done a lot of exersizes with sckit learn. I developed a club recommendation system during my internship in Havelsan.
                    Here's an overview of the classes:
                    <br/><br/>
                    Artificial Intelligence Class:
                    <br/>
                    -Developed a comprehensive understanding of AI concepts and methodologies.
                    <br/>
                    -Covered various AI fields including heuristic functions, search algorithms (uninformed, local, adversarial), Monte Carlo Tree Search, constraint satisfaction, and machine learning strategies.
                    <br/>
                    -Implemented AI agents for three table games (Chinese checkers, puzzle, tic-tac-toe) using various search and optimization techniques.
                    <br/><br/>
                    Machine Learning Class:
                    <br/>
                    -Acquired knowledge on a wide range of machine learning algorithms and techniques.
                    <br/>
                    -Exersized on topics such as non-parametric methods, probabilistic classifiers, linear regression, polynomial regression, regularization methods, logistic regression, support vector machines, decision trees, ensemble learning, dimensionality reduction, and unsupervised learning.
                    <br/>
                    -Learned about model evaluation metrics, model selection, and performance optimization.
                    <br/><br/>
                    Neural Networks Class:
                    <br/>
                    -Explored the fundamentals of neural networks and deep learning.
                    <br/>
                    -Studied single-layer perceptrons, multi-layer perceptrons, backpropagation, weight decay, optimization algorithms, convolutional neural networks (CNNs), modern CNN architectures (AlexNet, VGG, ResNet, etc.), image augmentation, fine-tuning, transfer learning, recurrent neural networks (RNNs), modern RNN architectures (GRU, LSTM), attention mechanisms, unsupervised learning techniques (autoencoders, clustering, GANs), similarity learning, and siamese neural networks.
                    <br/>
                    -Gained practical experience in building and training neural networks for various tasks including computer vision, object detection, semantic segmentation, style transfer, and natural language processing.
                    <br/>
                </p>

                <div className='center_content'><button className="close_button" onClick={onClose}>Close</button></div>

            </div>
        </div>
    );
};

export default DataScience;