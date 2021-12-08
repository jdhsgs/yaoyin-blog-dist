---
title: 语义分割cnn
date: 2021-12-08
sidebar: 'auto'
tags:
 - cnn
categories:
 - 神经网络
---
# 网络

# cnn

是一种专门用来处理**具有类似网格结构的数据的神经网络**。**卷积网络**是指那些至少在网络的一层中使用卷积运算来替代一般的矩阵乘法运算的神经网络。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191116145026770.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNzc2Mzg3MA==,size_16,color_FFFFFF,t_70)

*上图为DNN神经网络图，DNN内部的神经网络层可以分为三类，**输入层，隐藏层和输出层**，一般来说第一层是输出层，最后一层是输出层，而中间的层数都是隐藏层。*

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019111615080290.png)

总结

1.**DNN**是一种最简单的神经网络。各个神经元分别属于不同的层，每个神经元和前一层的所有神经元相连接，信号从输入层向输出层单向传播

2.**CNN**是一种通过卷积计算的前馈神经网络，其是受生物学上的感受野机制提出的，具有平移不变性，使用卷积核，最大的应用了局部信息，保留了平面结构信息

3.DNN以向量形式输入，未考虑平面的结构信息，而在图像领域和自然语言处理领域，平面信息很重要，因此CNN比DNN处理结果更好。

**由于DNN、CNN的输入、输出长度固定，而自然语言处理中的语句长度通常不固定，所以DNN、CNN处理这种问题效率较低，且无法处理时序相关的序列问题.为了解决这些问题，出现了循环神经网络RNN**

## cnn的五种结构

#### 1.输入层

在处理图像的CNN中，输入层一般代表了**一张图片的像素矩阵**。可以用**三维矩阵代表一张图片**。三维矩阵的长和宽代表了图像的大小，而三维矩阵的深度代表了图像的色彩通道。比如**黑白图片的深度为1，而在RGB色彩模式下，图像的深度为3。**

#### 2.卷积层

**卷积层是CNN最重要的部分**。它与传统全连接层不同，卷积层中每一个节点的输入只是上一层神经网络的一小块。**卷积层被称为过滤器(filter)或者内核(kernel)，Tensorflow的官方文档中称这个部分为过滤器(filter)**。

【注意】在一个卷积层中，过滤器(filter)所处理的节点矩阵的长和宽都是由人工指定的，这个节点矩阵的尺寸也被称为过滤器尺寸。**常用的尺寸有3x3或5x5**，而过滤层处理的矩阵深度和当前处理的神经层网络节点矩阵的深度一致。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191116154816709.gif)

卷积的过程

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019111615502886.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNzc2Mzg3MA==,size_16,color_FFFFFF,t_70)

#### 3.池化层

池化层不会改变三维矩阵的深度，但是它**可以缩小矩阵的大小**。

通过池化层，可以进一步缩小最后全连接层中节点的个数，从而达到减少整个神经网络参数的目的。使用池化层既可以加快计算速度也可以防止过拟合。池化层filter的计算不是节点的加权和，而是采用最大值或者平均值计算。使用最大值操作的池化层被称之为最大池化层（max pooling）（最大池化层是使用的最多的磁化层结构）。使用平均值操作的池化层被称之为平均池化层（mean pooling）。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191116160351379.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNzc2Mzg3MA==,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191116160420689.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNzc2Mzg3MA==,size_16,color_FFFFFF,t_70)

#### 4.全连接层

在经过多轮卷积层和池化层的处理之后，在CNN的最后一般会由1到2个全连接层来给出最后的分类结果。

经过几轮卷积层和池化层的处理之后，可以认为图像中的信息已经被抽象成了信息含量更高的特征。

我们可以将卷积层和池化层看成自动图像特征提取的过程。在提取完成之后，仍然需要使用全连接层来完成分类任务。


#### 5.Softmax层

通过Softmax层，可以得到当前样例属于不同种类的概率分布问题。



# FCN

## CNN与FCN的比较

CNN: 在传统的CNN网络中，在最后的卷积层之后会连接上若干个全连接层，将卷积层产生的特征图（feature map）映射成为一个固定长度的特征向量。一般的CNN结构适用于图像级别的分类和回归任务，因为它们最后都期望得到输入图像的分类的概率，如ALexNet网络最后输出一个1000维的向量表示输入图像属于每一类的概率。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190727205043126.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNzYwNzY3,size_16,color_FFFFFF,t_70)

在CNN中, 猫的图片输入到AlexNet, 得到一个长为1000的输出向量, 表示输入图像属于每一类的概率, 其中在“tabby cat”这一类统计概率最高, 用来做分类任务。



**FCN:** FCN是对图像进行像素级的分类（也就是每个像素点都进行分类），从而解决了语义级别的图像分割问题。

与上面介绍的经典CNN在卷积层使用全连接层得到固定长度的特征向量进行分类不同，FCN可以接受任意尺寸的输入图像

采用反卷积层对最后一个卷基层的特征图（feature map）进行上采样，使它恢复到输入图像相同的尺寸，从而可以对每一个像素都产生一个预测，同时保留了原始输入图像中的空间信息，最后奇偶在上采样的特征图进行像素的分类



![在这里插入图片描述](https://img-blog.csdnimg.cn/20190727205145371.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNzYwNzY3,size_16,color_FFFFFF,t_70)

简单的说，FCN与CNN的区别在于FCN把CNN最后的全连接层换成卷积层，其输出的是一张已经标记好的图，而不是一个概率值。



## FCN上采样讲解

FCN网络一般是用来对图像进行语义分割的，于是就需要对图像上的各个像素进行分类，这就需要一个上采样将最后得到的输出上采样到原图的大小。上采样对于低分辨率的特征图，常常采用上采样的方式将它还原高分辨率，这里陈述上采样的三种方法



### 1.双线性插值上采样

单线性插值（一个方向上）就是知道两个点的值，并将两点连成一条直线，来确定中间的点的值

### 2.反卷积上采样

**怎样上采样：** 普通的卷积操作，会使得分辨率降低，如下图3*3的卷积核去卷积4*4得到2*2的输出。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190727205525518.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNzYwNzY3,size_16,color_FFFFFF,t_70)

上采样的过程也是卷积，那么怎么会得到分辨率提高呢？之前我们看卷积时有个保持输出与输入同分辨率的方法就是周围补0。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190727205545284.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNzYwNzY3,size_16,color_FFFFFF,t_70)

其实上面这种补0的方法事有问题的，你想一下，只在四周补0会导致最边上的信息不太好，那我们把这个信息平均下，在每个像素与像素之间补0，如下图所示：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190727205607141.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNzYwNzY3,size_16,color_FFFFFF,t_70)

### 3.反池化上采样

反池化可以用下图来理解，再池化时需要记录下池化的位置，反池化时把池化的位置直接还原，其他位置填0。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190727205635411.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNzYwNzY3,size_16,color_FFFFFF,t_70)

上面三种方法各有优缺，双线性插值方法实现简单，无需训练；反卷积上采样需要训练，但能更好的还原特征图；



### FCN的实现

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190728153344199.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNzYwNzY3,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190728153423546.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNzYwNzY3,size_16,color_FFFFFF,t_70)

经过多次卷积后，图像的分辨率越来越低，为了从低分辨率的热图heatmap恢复到原图大小，以便对原图上每一个像素点进行分类预测，需要对热图heatmap进行反卷积，也就是上采样。论文中首先进行了一个上池化操作，再进行反卷积（上述所提到的上池化操作和反卷积操作，其实可以理解为上卷积操作），使得图像分辨率提高到原图大小。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190728153507888.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNzYwNzY3,size_16,color_FFFFFF,t_70)

**跳级(strip)结构**：对第5层的输出执行32倍的反卷积得到原图，得到的结果不是很精确，论文中同时执行了第4层和第3层输出的反卷积操作（分别需要16倍和8倍的上采样），再把这3个反卷积的结果图像融合，提升了结果的精确度：

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019072815355086.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNzYwNzY3,size_16,color_FFFFFF,t_70)

### FCN的实现过程

用AlexNet，VGG16或者GoogleNet训练好的模型做初始化，在这个基础上做fine-tuning，只需在末尾加上upsampling，参数的学习还是利用CNN本身的反向传播原理

## 总结

FCN的卷积网络部分可以采用VGG、GoogleNet、AlexNet等作为前置基础网络，在这些的预训练基础上进行迁移学习与finetuning，对反卷积的结果跟对应的正向feature map进行叠加输出(这样做的目的是得到更加准确的像素级别分割)





## 基于深度学习的分割

### 1.VGGNet

它探索了卷积神经网络的深度和其性能之间的关系，通过反复的堆叠33的小型卷积核和22的最大池化层，成功的构建了16~19层深的卷积神经网络。VGGNet获得了ILSVRC 2014年比赛的亚军和定位项目的冠军，在top5上的错误率为7.5%。目前为止，VGGNet依然被用来提取图像的特征。

## 优缺点

由于参数量主要集中在最后的三个FC当中，所以网络加深并不会带来参数爆炸的问题； 

多个小核卷积层的感受野等同于一个大核卷积层（三个3x3等同于一个7x7）但是参数量远少于大核卷积层而且非线性操作也多于后者，使得其学习能力较强 

VGG由于层数多而且最后的三个全连接层参数众多，导致其占用了更多的内存（140M）



## 2.Resnet

随着深度学习的应用，各种深度学习模型随之出现，虽然在每年都会出现性能更好的新模型，但是对于前人工作的提升却不是那么明显，其中有重要问题就是深度学习网络在堆叠到一定深度的时候会出现梯度消失的现象，导致误差升高效果变差，后向传播时无法将梯度反馈到前面的网络层，使得前方的网络层的参数难以更新，训练效果变差。这个时候ResNet恰好站出来，成为深度学习发展历程中一个重要的转折点。

ResNet语义分割领域最受欢迎且最广泛运用的神经网络.ResNet的核心思想就是在网络中引入恒等映射，允许原始输入信息直接传到后面的层中，在学习过程中可以只学习上一个网络输出的残差（F(x)），因此ResNet又叫做残差网络。



Resnet优缺点：

1）引入了全新的网络结构（残差学习模块），形成了新的网络结构，可以使网络尽可能地加深； 

2）使得前馈/反馈传播算法能够顺利进行，结构更加简单；

3）恒等映射地增加基本上不会降低网络的性能；

4）建设性地解决了网络训练的越深，误差升高，梯度消失越明显的问题； 

5）由于ResNet搭建的层数众多，所以需要的训练时间也比平常网络要长。

### **Mask R-CNN**

#### Rcnn

先使用selective search算法提取2000个候选框，然后通过卷积网络对候选框进行串行的特征提取，再根据提取的特征使用SVM对候选框进行分类预测，最后使用回归方法对区域框进行修正

R-CNN的优缺点：

- 是首个开创性地将深度神经网络应用到目标检测的算法；
- 使用Bounding Box Regression对目标检测的框进行调整；
- 由于进行特征提取时是串行，处理耗时过长；
- Selective search算法在提取每一个region时需要2s的时间，浪费大量时间

#### **Fast R-CNN**

Fast R-CNN在传统的R-CNN模型上有所改进的地方是它是直接使用一个神经网络对整个图像进行特征提取，就省去了串行提取特征的时间；接着使用一个RoI Pooling Layer在全图的特征图上摘取每一个RoI对应的特征，再通过FC进行分类和包围框的修正。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201108153439263.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwODUxNTYx,size_16,color_FFFFFF,t_70#pic_center)

Fast R-CNN的优缺点

- 节省了串行提取特征的时间；
- 除了selective search以外的其它所有模块都可以合在一起训练；
- 最耗时间的selective search算法依然存在

### **Faster R-CNN**

2016年提出的Faster R-CNN可以说有了突破性的进展（虽然还是目标检测哈哈哈），因为它改变了它的前辈们最耗时最致命的部位：selective search算法。它将selective search算法替换成为RPN，使用RPN网络进行region的选取

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201108153509456.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwODUxNTYx,size_16,color_FFFFFF,t_70#pic_center)

Faster R-CNN优缺点：

- 使用RPN替换了耗时的selective search算法，对整个网络结构有了突破性的优化；
- Faster R-CNN中使用的RPN和selective search比起来虽然速度更快，但是精度和selective search相比稍有不及，如果更注重速度而不是精度的话完全可以只使用RPN；

#### **Mask R-CNN**

在Faster R-CNN的结构基础上加上了Mask预测分支，并且改良了ROI Pooling，提出了ROI Align

![在这里插入图片描述](https://img-blog.csdnimg.cn/202011081535562.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwODUxNTYx,size_16,color_FFFFFF,t_70#pic_center)



- 引入了预测用的Mask-Head，以像素到像素的方式来预测分割掩膜，并且效果很好；
- 用ROI Align替代了ROI Pooling，去除了RoI Pooling的粗量化，使得提取的特征与输入良好对齐；
- 分类框与预测掩膜共享评价函数，虽然大多数时间影响不大，但是有的时候会对分割结果有所干扰。

#### **Mask Scoring R-CNN**

他的网络结构也是在Mask R-CNN的网络基础上做了一点小小的改进，添加了Mask-IoU。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201108153654798.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwODUxNTYx,size_16,color_FFFFFF,t_70#pic_center)

- 优化了Mask R-CNN中的信息传播，提高了生成预测模板的质量；
- 未经大批量训练的情况下，就拿下了COCO 2017挑战赛实例分割任务冠军；
- 整个网络有些庞大，一方面需要ResNet当作主干网络，另一方面需要其它各种Head共同承担各种任务。

### DeepLab

主要是使用DCNNs和概率图模型（条件随机场）来实现图像像素级的分类（语义分割任务）

DCNN应用于像素级分类任务有两大障碍：信号下采样和空间“不敏感性”（不变性）

由于DCNNs的平移不变性，DCNNs被用到很多抽象的图像任务中，如imagenet大规模分类，coco目标检测等中。第一个问题涉及在每层DCNN上执行的最大池化和下采样（‘步长’）的重复组合所引起的信号分辨率的降，此模型通过使用空洞算法（”hole” algorithm，也叫”atrous” algorithm）来改进第一个问题，通过使用全连接条件随机场来改善分割效果。

（1）速度快，带空洞卷积的DCNN可以达到8fps，而后处理的全连接CRF只需要0.5s。
（2）准确性高：在PASCAL VOC取得第一名的成绩，高于第二名7.2%个点，在PASCAL VOC-2012测试集上达到71.6%的IOU准确性。
（3）简单：有两个模块构成整体模型，分别是DCNN和CRF



论文首先指出DCNNs具有空间不变性, 这样的特性十分有利于分类这种高层次的抽象决策任务(比如一张图片里边不管人在什么位置, 最后都能正确预测为人).但是对于分割或检测任务来说, DCNNs它只能够预测目标出大概的位置,不能预测出很精细的边缘细节.为什么呢?因为DCNNs中多采用卷积和max pooling的组合来提取特征以及下采样,最后得到很高级很抽象的语义特征,特别适用于分类任务.但是在这不断的下采样过程中,必然会损失掉很多空间信息,所以最后得到的小分辨率feature maps对于小目标来说,是不容检测出来的,尤其是边缘细节.

### 解决分辨率小的问题

卷积过程中就可以减少下采样的倍数(实际论文中是将pool4和pool5的stride改为1,也就是得到8x下采样feature maps之后就不下采样了,此时相当于8个输入像素计算一个特征响应),从而获得更加稠密(分辨率高)的feature maps,相当于是在高层语义特征和高分辨率之间的一个权衡折中.但是又会有问题,不做下采样的话,就会失去原先网络的大感受野

### 解决感受野变小的问题

deeplabv1从小波变换将空洞算法引入卷积网络中,空洞卷积核可以扩大卷积核的感受野.总的来说,pool4(stride=1)之后,conv5采用dialate conv(input stride或rate=2)来弥补;pool5(stride=1)之后,跟着fc6,fc7,fc8,softmax.而作者在fc6采用几种kernel size核input stride的组合来做对比实验,得到的结论是,fc6采用1024x3x3,rate=12的卷积核来全卷积连接,得到最佳表现(与fc6为4096x7x7精度相等,但更快更轻量).

 更加稠密的feature maps，意味着更多的计算量，使用空洞卷积核，一方面可以使小卷积核获得大卷积核的大感受野，另一方面，小卷积核计算更高效。

![img](https://img-blog.csdnimg.cn/20191020141123898.png)

### 另外两个亮点：

一个是针对多尺度目标的检测问题，论文作者也采用了多尺度卷积特征整合的方式,但是效果其实不明显,只有1个百分点左右的提升.大概做法是,将前4个max pool的输出经过1个128x3x3和1个128x1x1的卷积核来提取特征,并整合(concate)到pool5的输出,最终输入fc层和softmax层得到8x下采样的预测结果(训练时将gt下采样8x了),然后再将预测结果8x双线性插值上采样得到和输入尺寸一致的分割结果.



另外一个亮点是,本文提出全连接的CRFs算法,来后处理分割结果，以得到更加精细的边缘细节.这里CRFs的提升比较明显.但这样会使得模型比较冗赘,不能够end-2-end地训练和推理,在deeplabv3之后就取消了CRFs,并且效果还更好(所以暂时先不学习这个CRFs了).



### DeeplabV2

提出ASPP模块和采用ResNet101做backbone



空洞卷积就是在常规卷积核里边按给定的input stride(rate)填充0,从而增大了卷积核的有效视野(FOV).这样的机制可以抵消掉max pool不下采样(stride=1)带来的感受野减小的问题.

另外,在DCNNs中减少了两次下采样,输出的feature maps尺寸相对于输入图像是下采样了8x,即得到了更加稠密(分辨率更高)同时又具备足够高级语义的feature输出,这有利于小目标和目标边缘细节的精细分割.这样做不仅考虑了目标尺度和边缘,分割精度得到明显的提升,

而且,简化了传统DCNNs用于语义分割时冗余且低效的上采样过程.空洞卷积核并没有参数量引入额外的参数,相比传统语义分割的DCNNs少了两次上采样,速度也更快了.总的来说就是真的做到更快更精准.


![img](https://img-blog.csdnimg.cn/20191021211039727.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzM4MjcwODQ1,size_16,color_FFFFFF,t_70)

空洞空间金字塔池化(ASPP)灵感来自于SPP检测网络,主要解决目标的多尺度问题.输入的feature maps为pool5的输出.假如要分割的目标在橙色框内,那么显然用大的滤波器来检测是不合适的.而往往我们也不知道使用什么样的滤波器才好,所以作者在这里设计了4种尺度的卷积核来提取目标特征,相比以往fc6层只采用单个尺度的卷积核效果好太多了.在fc层ASPP之后,将各个feature maps进行融合,得到更加有效的特征输出.论文中作者在baseline(deeplab-large-fov,1024x3x3卷积核,rate=12)基础上,分别对比了ASPP-S(rate=(2,4,8,12)),和ASPP-L(rate=(6,12,18,24))在CRFs前后的性能,结论是下图中的组合(ASPP-L)效果最好.值得一提的是,在分割网络中,空洞卷积(膨胀卷积)和ASPP模块经常被采用,可以带来性能提升.
