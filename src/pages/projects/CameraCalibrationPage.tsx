import { useLayoutEffect } from "react";

import { MathJax, MathJaxContext } from "better-react-mathjax";

import { BackButton, Text } from "../../components/atoms";
import { myMilkYellow, myTextLightGrey } from "../../styles/colors";

import {
  IMGCylindricalProjection,
  IMGCylindricalProjectionSideView,
  IMGCylindricalProjectionTopView,
  IMGErrorDistributionMap19201080image,
  IMGImprovedReprojectionPixelErrorResult19201080,
  IMGImprovedReprojectionPixelErrorResult34201200,
  IMGImprovedReprojectionProcess,
  IMGPhotoAfterDistortionCorrection,
  IMGPhotoBeforeDistortionCorrection,
  IMGPinholeCameraModel,
  IMGReprojectionPixelErrorResult,
  IMGReprojectionProcess,
} from "../../assets/projects/cameraCalibration";

export default function CameraCalibrationPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="project-page">
      <BackButton />
      <Text style={{ fontSize: 20, color: myTextLightGrey }}>
        <h1 style={{ color: myMilkYellow, marginTop: 30 }}>
          Camera Calibration and Distortion Correction
        </h1>
        <div>
          Fisheye camera is widely used in the self-driving vehicles fields due
          to it can provide a bigger view. However, it brings image distortion
          problems. So we need to find a proper way to solve this problem.
        </div>
        <ul>
          <li style={{ marginBottom: 4 }}>
            Through processed video flows of camera sensors for self-driving
            vehicles with camera calibration and distortion correction
            algorithms, we can mitigate the side effects.
          </li>
          <li style={{ marginBottom: 4 }}>
            In addition, we achieved a reduction of distortion correction errors
            from 1.395 ± 0.136 pixels to 0.055 ± 0.192 pixels through
            cylindrical projection and single-point mapping with Python
          </li>
          <li style={{ marginBottom: 4 }}>
            Based on these results, I developed a mapping table and video
            processing algorithms for digital signal processors with C based on
            OpenCV to increase the processing efficiency of DSP (Digital Signal
            Processor).
          </li>
        </ul>
        <div className="figure">
          <img
            src={IMGPhotoBeforeDistortionCorrection}
            width="30%"
            alt="Before distortion correction"
          />
          <div style={{ width: "5%", display: "inline-block" }} />
          <img
            src={IMGPhotoAfterDistortionCorrection}
            width="30%"
            alt="After distortion correction"
          />
          <div style={{ height: 10 }} />
          <div className="figure-footnote">
            An example of photo before/after distortion correction{" "}
          </div>
        </div>

        <br />
        <hr />
        <br />
        <MathJaxContext>
          <span>The following topics are discussed in this article:</span>
          <ul>
            <li>
              The principle and implementation of Calibration for pinhole camera
              model and fisheye camera model
            </li>
            <li>
              Further optimization using cylindrical projection and how to
              decrease pixel errors
            </li>
            <li>Development of DSP mapping table</li>
          </ul>
          <h3>1. Pinhole Camera Model</h3>
          <p>
            In the pinhole camera model, the imaging model can be simplified as
            shown in the following figure:
          </p>
          <div className="figure">
            <img
              src={IMGPinholeCameraModel}
              width="80%"
              alt="Pinhole Camera Model"
            />
            <div className="figure-footnote">
              figure1.1 Pinhole camera model
            </div>
          </div>
          <p>
            where f is the focal length of the camera , Z is the distance from
            the camera to the object, X is the length of the object, and x is
            the image of the object on the image plane. Through the similar
            triangle relationship can be obtained:
          </p>
          <MathJax>{String.raw`$$
                                          \begin{cases}
                                          x=\frac{X}{Z}f\\
                                          y=\frac{Y}{Z}f
                                          \end{cases}
                                        $$`}</MathJax>
          <p>
            Since the center position is usually not on the optical axis due to
            accuracy problems, we introduce two new parameters cx and cy to
            model the possible offset of the projection screen coordinate center
            relative to the optical axis.
          </p>
          <p>
            The book <i>Learning OpenCV3</i> told us that according to
            projective geometry, the point Q of the physical world is projected
            to the point q on the camera plane, which can be expressed as
            <MathJax>{String.raw`$$\vec{q} = M \cdot  \vec{Q}$$`}</MathJax>
            <MathJax>{String.raw`$$
                                          \vec{q} = \left [ \begin{matrix}
                                          x\\ 
                                          y\\ 
                                          w
                                          \end{matrix} \right ]
                                          ,
                                          M = \left [ \begin{matrix}
                                          f_x & 0 & c_x\\ 
                                          0 & f_y & c_y\\ 
                                          0 & 0 & 1
                                          \end{matrix} \right ]
                                          ,
                                          \vec{Q} = \left [ \begin{matrix}
                                          X\\ 
                                          Y\\ 
                                          Z
                                          \end{matrix} \right ]
                                        $$`}</MathJax>
          </p>
          <p>
            Lens shape, assembly, imaging physical characteristics, and other
            factors may cause lens distortion. There are mainly two types of
            distortion for normal lenses: radial distortion and tangential
            distortion, they can be approximated by polynomials and can be
            adjusted by the following formulas respectively. Radial distortion
            <MathJax>{String.raw`$$
                                          \begin{cases}
                                          x_d = x(1+k_1r^2+k_2r^4+k_3r^6)\\
                                          y_d = y(1+k_1r^2+k_2r^4+k_3r^6)
                                          \end{cases}
                                        $$`}</MathJax>
            Tangential distortion
            <MathJax>{String.raw`$$
                                          \begin{cases}
                                          x_d = x + [2p_1xy+p_2(r^2+2x^2)] \\
                                          y_d = y + [p_1(r^2+2x^2)+2p_2xy]
                                          \end{cases}
                                        $$`}</MathJax>
          </p>
          <h3>2. Fisheye Camera Model</h3>
          <p>
            However, in the field of self-driving and visual slam, fisheye
            lenses and wide-angle lenses are applied more than the normal ones.
            The lenses we use are similar to fisheye lenses, but they are not
            exactly the same. We can refer to the fisheye camera model to build
            our model.
          </p>
          <p>
            Let P be a 3D point in the world reference coordinate system X. In
            the camera reference coordinate system, the vector coordinates of P
            are:
          </p>
          <MathJax>{String.raw`$$ X_C = RX + T $$`}</MathJax>
          <p>
            where R is the rotation matrix, and the coordinates x, y, and z of
            the three dimensions of Xc can be expressed as:
          </p>
          <MathJax>{String.raw`$$
                                          x = X_{C1} \\
                                          y = X_{C2} \\
                                          z = X_{C3}
                                          $$
                                          `}</MathJax>
          <p>The coordinates of P in the pinhole camera model are [a, b] </p>
          <MathJax>{String.raw`$$
                                        a=\frac{x}{z}\\
                                        b=\frac{y}{z} \\
                                        r^2 = a^2 + b^2 \\
                                        \theta = atan(r)
                                        $$`}</MathJax>
          <p>The distoration of the fisheye model is:</p>
          <MathJax>{String.raw`$$ \theta_d = \theta(1+k_1\theta^2+k_2\theta^4+k_3\theta^6+k_4\theta^8) $$`}</MathJax>
          <p>Distoration coordinates [x',y']：</p>
          <MathJax>{String.raw`$$
                                        x' = a \frac{\theta_d}{r}\\
                                        y' = b \frac{\theta_d}{r}
                                        $$`}</MathJax>
          <p>
            Finally, convert to the pixel coordinate system, the final pixel
            coordinate [u,v] would be:
          </p>
          <MathJax>{String.raw`$$
                                        u = f_x (x'+αy' )+c_x \\
                                        v = f_y y'+c_y
                                        $$`}</MathJax>
          <p>
            In all, to achieve camera calibration, we need to solve the
            following parameters:{" "}
          </p>
          <ul>
            <li>
              four camera intrinsic parameters:
              <MathJax>{String.raw`$$(f_x,f_y,c_x,c_y)$$`}</MathJax>
            </li>
            <li>
              five (or more) distortion parameters
              <ul>
                <li>
                  composed of three(or more) is composed of radial parameters
                  <MathJax>{String.raw`$$(k_1,k_2,k_3 [,k_4,k_5,k_6])$$`}</MathJax>
                </li>
                <li>
                  two tangential parameters
                  <MathJax>{String.raw`$$(p_1, p_2)$$`}</MathJax>
                </li>
              </ul>
            </li>
          </ul>
          <p>
            Due to the coupling between intrinsic and extrinsic parameters, we
            will need multiple views to solve them.
          </p>
          <p>
            OpenCV provides us the function <pre>cv::calibrateCamera()</pre> to
            find a close distortion parameters and get the closed-loop solution.
            And then we can apply LM optimization to re-estimate the internal
            and external parameters to get a better solution.
          </p>
          <p>
            After that, we can use the <pre>initUndistortRectifyMap()</pre> and
            the parameters we achieved to distort the correction.
          </p>
          <p>
            Figure 2.1 and figure 2.2 show an example of the result of
            distortion correction.
          </p>
          <div className="figure">
            <img
              src={IMGPhotoBeforeDistortionCorrection}
              width="40%"
              alt="Before distortion correction"
            />
            <div className="figure-footnote">
              figure2.1 Photo before distortion correction{" "}
            </div>
          </div>
          <div className="figure">
            <img
              src={IMGPhotoAfterDistortionCorrection}
              width="40%"
              alt="After distortion correction"
            />
            <div className="figure-footnote">
              figure2.2 Photo after distortion correction{" "}
            </div>
          </div>
          <h3>3. Cylindrical Projection</h3>
          <p>
            The camera we used is similar to the fisheye camera. Although using
            the fisheye model for calibration and distortion correction can get
            good results, there is still great stretching on the sides of the
            picture, especially in the video stream.
          </p>
          <p>
            Since the vehicles in the images used for training the recognition
            model are in an unstretched state, the detection of the
            distortion-corrected image will have a certain impact on the
            detection results. Therefore, it is necessary to compress the image
            locally to make the vehicle model close to the test. We can achieve
            this by cylindrical projection.
          </p>
          <div className="figure">
            <img
              src={IMGCylindricalProjection}
              width="30%"
              alt="Cylindrical projection"
            />
            <div className="figure-footnote">
              {" "}
              figure3.1 Cylindrical projection{" "}
            </div>
          </div>
          <p>
            Assuming that the camera model is a pinhole camera model, and the
            camera is located at N, as shown in the figure. The image we got
            from the camera is a rectangular plane EFGH. If we project the
            rectangular plane EFGH onto a cylindrical surface, it would become a
            curved surface like JDILCK. We need to find the correspondence of
            each pixel from the rectangular plane EFGH to the projected surface
            JDILCK.
          </p>
          <p>
            Let the focal length of the camera be f (f can take any value, not
            necessarily the real value that requires the focal length of the
            camera), take the center in the original image EFGH (W/2,H/2) is the
            origin.
          </p>
          <div className="figure">
            <img
              src={IMGCylindricalProjectionTopView}
              width="40%"
              alt="figure3.2 Cylindrical projection top view"
            />
            <div className="figure-footnote">
              {" "}
              figure3.2 Cylindrical projection top view{" "}
            </div>
          </div>
          <p>
            Figure 3.2 shows the top view of cylindrical projection. The point
            -W/2 is mapped to -W'/2, and the point W/2 is mapped to W'/2. As we
            set the direction from -W/2 to W/2 as the X direction of the
            original image, the direction from -W'/2 to O to W'/2 would be the X
            direction of the projected cylindrical surface.
          </p>
          <p>
            Let's assume that there is a point x on the original plane, which is
            mapped to x' on the surface. Let
            <MathJax>{String.raw`$\angle xNO = \theta$`}</MathJax>
            then
            <MathJax>
              {String.raw`$$
                  \theta=arctan⁡(\frac{x}{f})
                  $$`}
            </MathJax>
            The arc length
            <MathJax>
              {String.raw`$$
                  x'= f \times \theta
                  $$`}
            </MathJax>
            Therefore, the relationship of the cylindrical projection mapping in
            the X-axis direction would be
            <MathJax>
              {String.raw`$$
                  x'=f \times arctan⁡(\frac{x}{f})
                  $$`}
            </MathJax>
            Figure3.3 is the side view. The red dotted line in the side view
            (figure3.3) corresponds to the red dotted line in the top view
            (figure3.2). We can get the following relationship.
            <MathJax>
              {String.raw`$$
                  xN=\frac{f}{cos\theta}
                  $$`}
            </MathJax>
            And from the similar triangular, we can get
            <MathJax>
              {String.raw`$$
                  \frac{y}{\frac{f}{cos\theta}} = \frac{y'}{f}
                  $$`}
            </MathJax>
          </p>
          <div className="figure">
            <img
              src={IMGCylindricalProjectionSideView}
              width="30%"
              alt="figure3.2 Cylindrical projection side view"
            />
            <div className="figure-footnote">
              figure3.3 Cylindrical projection side view{" "}
            </div>
          </div>
          <p>
            In all, the corresponding relationship of each pixel between the
            original image and the projection surface is as follows:{" "}
          </p>
          <MathJax>
            {String.raw`$$
                \theta=arctan⁡(\frac{x}{f})\\
                x'= f \times \theta\\
                \frac{y}{\frac{f}{cos\theta}} = \frac{y'}{f}
                $$`}
          </MathJax>
          <p>As </p>
          <MathJax>
            {String.raw`$$ x=x'-x_{center}\\
                y=y'-y_{center} \\
                x'=x_{reverse}-x_{center} \\
                y'=y_{reverse}-y_{center}\\
                $$ `}
          </MathJax>
          <p>The inverse function would be: </p>
          <MathJax>
            {String.raw`$$
                x_{reverse} = f \times tan(\frac{x'-x_{center}}{f}) + x_{center}\\
                \theta = arctan(\frac{x_{reverse}-x_{center}}{f})\\
                y_{reverse}  = cos\theta \cdot (y' -y_{center}) + y_{center}
                $$`}
          </MathJax>
          <div className="figure">
            <img
              src={IMGReprojectionProcess}
              width="60%"
              alt="figure3.4 Reprojection process"
            />
            <div className="figure-footnote">
              figure3.4 Reprojection process{" "}
            </div>
          </div>
          <p>
            We use the D as the evaluation standard of pixel error, where D is{" "}
          </p>
          <MathJax>
            {String.raw`$$ D= \sqrt{(x-reverse_x)^2+(y-reverse_y)^2} $$`}
          </MathJax>
          <div className="figure">
            <img
              src={IMGReprojectionPixelErrorResult}
              width="40%"
              alt="figure3.5 Reprojection pixel error result"
            />
            <div className="figure-footnote">
              figure3.5 Reprojection pixel error result
            </div>
          </div>
          <p>
            The result is shown in figure 3.5. It shows that for an image with a
            size of 1920*1080 and a total of 2,073,600 pixels, most of the point
            pixel errors are within the error range of 1 pixel ~ 2 pixel, with
            an average value of 1.395 ± 0.136 pixel.
          </p>
          <table>
            <tr>
              <th>Pixel error (pixel)</th>
              <th>number</th>
            </tr>
            <tr>
              <td>D = 0</td>
              <td>5337</td>
            </tr>
            <tr>
              <td>0 &lt; D &lt; 1</td>
              <td>0</td>
            </tr>
            <tr>
              <td>1 &lt; D &lt; 2</td>
              <td>2053524</td>
            </tr>
            <tr>
              <td>2 &lt; D &lt; 3</td>
              <td>14739</td>
            </tr>
            <tr>
              <td> D &gt; 3</td>
              <td>0</td>
            </tr>
            <tr>
              <span>sum: 1.395 ± 0.136 pixel</span>
            </tr>
          </table>
          <p>
            Considering that in the calculation process of the mapping table,
            linear interpolation was applied which may cause the error in the
            reprojection process. In order to reduce the error, we build the
            mapping table for mapping the original image to distortion
            correction image directly without interpolation and other steps and
            retain the decimal part. Then applied the cylindrical projection
            coordinate transformation to achieve the mapping table from the
            original image to the cylindrical projection image. We back-project
            it and compare the result with the mapping table of the distortion
            correction image.
          </p>
          <div className="figure">
            <img
              src={IMGImprovedReprojectionProcess}
              width="70%"
              alt="figure3.6 Imporved reprojection process"
            />
            <div className="figure-footnote">
              figure3.6 Imporved reprojection process
            </div>
          </div>
          <p>
            The process is shown in figure3.6. (map1, map2) is the mapping table
            from the original image to the distortion correction
            image.(cylinder_project_map1, cylinder_project_map2) is the mapping
            table from the original image to the cylindrical projection
            image.(reserve_map1, reserve_map2) is the original image through the
            cylindrical projection Back-projected back to the mapping table of
            the distortion map. For any pixel on the cylindrical projection map,
            we can find the corresponding pixel in the original image through
            (cylinder_project_map1, cylinder_project_map2), and then find its
            undistortion pixel.
          </p>
          <p>
            The result is 1.822 ± 49.143 pixel, which is even worse than the
            previous back-projection method. But we found that there will be a
            pixel offset for all points. If we try to correct it, the outermost
            pixel will have the problem that there would be no corresponding
            mapping point. Fortunately, the target detection is mainly
            concentrated in the center of the image, and the influence of edge
            points is relatively small. Therefore, we can just remove the pixels
            in the outermost, and correct the offset, the error is reduced to
            0.055 ± 0.192 pixel.
          </p>
          <div className="figure">
            <img
              src={IMGImprovedReprojectionPixelErrorResult19201080}
              width="50%"
              alt="Improved reprojection pixel error result (before/after processing offset, 1920*1080)"
            />
            <div className="figure-footnote">
              figure3.7 Improved reprojection pixel error result (before/after
              processing offset, 1920*1080 image)
            </div>
          </div>
          <p>And the error distribution map would be like figure3.8.</p>
          <div className="figure">
            <img
              src={IMGErrorDistributionMap19201080image}
              width="70%"
              alt="Error distribution map (1920*1080)"
            />
            <div className="figure-footnote">
              figure3.8 Error distribution map (1920*1080 image)
            </div>
          </div>
          <p>When the image size is 3420*1200, the result would be:</p>
          <div className="figure">
            <img
              src={IMGImprovedReprojectionPixelErrorResult34201200}
              width="50%"
              alt="Improved reprojection pixel error result (before/after processing offset, 3420*1200)"
            />
            <div className="figure-footnote">
              figure3.9 Improved reprojection pixel error result (before/after
              processing offset, 3420*1200 image)
            </div>
          </div>
          <p>
            It is worth noting that figure3.8 shows the center pixels of the
            image, which are the pixel point errors on the (x_center ,y)
            coordinate are greater than 1 pixel. According to above formula,
            there should have x_reverse=x_center and y_reverse=y_center at the
            center of the image. If we just modify the reverse mapping table
            directly. The error will be even larger.{" "}
          </p>
          <p>
            After analysis, this may caused by the fractional part of the
            distortion correction mapping table.Due to the influence of the
            fractional part, the statistical error will bring more errors. And
            it needs further analysis.
          </p>
          <h3>4. DSP Development</h3>
          <p>
            After obtaining the internal and external parameters of the camera,
            it is necessary to perform the projective transformation on each
            pixel in the original image to achieve distortion correction image.
            We can store the undistorted coordinates corresponding to each pixel
            as a mapping table. The mapping table of each camera will be
            initialized only once, and we can speed up operational efficiency by
            just looking for corresponding coordinates through the mapping table
            as it will save time for calculation.
          </p>
          <div className="figure">
            <img
              src={IMGImprovedReprojectionPixelErrorResult34201200}
              width="50%"
              alt="Improved reprojection pixel error result (before/after processing offset, 3420*1200)"
            />
            <div className="figure-footnote">
              figure3.9 Improved reprojection pixel error result (before/after
              processing offset, 3420*1200 image)
            </div>
          </div>
          <p>
            DSP uses the YUV format which is 4:2:0 sampling. This sampling
            format can save a lot of storage space compared to RGB. As shown in
            the figure4.2, only one chrominance component is stored at a 2:1
            sampling rate for each scan line, and adjacent scan lines will store
            different chrominance components. Each time a pixel is sampled, the
            Y component will be sampled, and the U and V components will be
            sampled 2:1 interlaced. Compared with RGB, this sampling method
            saves general storage space.
          </p>
          <div className="figure">
            <img
              src={IMGImprovedReprojectionPixelErrorResult34201200}
              width="50%"
              alt="Improved reprojection pixel error result (before/after processing offset, 3420*1200)"
            />
            <div className="figure-footnote">
              figure3.9 Improved reprojection pixel error result (before/after
              processing offset, 3420*1200 image)
            </div>
          </div>
          <p>
            At the same time, the maximum pixels processed by the DSP at one
            time are 256*256, while the size of our input image is 1920*1080,
            which is much larger than its limit. Therefore, we need to divide
            the mapping table to meet the requirements of the largest pixel
            processed by the DSP. In addition, in order to enable the DSP to
            perform distortion correction, the mapping table needs to be output
            as a binary file that can be used by the DSP according to a certain
            format.
          </p>
          <span>The whole process will be the following steps:</span>
          <ol>
            <li>
              Generating the mapping table array according to the camera
              internal and external parameters, input image size, output image
              size, and other parameters
            </li>
            <li>
              Extract the Y component and UV component from the mapping table
              array
            </li>
            <li>
              Determine the size range of the image segmentation, and segment
              the image to obtain the segmentation size of the Y component and
              UV component, the coordinate point of the upper left corner of
              each segment, and the length and width of the maximum
              segmentation.
            </li>
            <li>
              Output as binary file according to DSP processing format
              requirements
            </li>
          </ol>
          <table>
            <tr>
              <th></th>
              <th>Parameter Type</th>
              <th>Input Parameter</th>
              <th>Output Parameter</th>
            </tr>
            <tr>
              <td>Internal parameters</td>
              <td>double / float</td>
              <td>fx, fy, cx, cy</td>
              <td></td>
            </tr>
            <tr>
              <td>Distortion parameter</td>
              <td>double / float</td>
              <td>k1, k2, k3, k4</td>
              <td></td>
            </tr>
            <tr>
              <td>Original Image Resolution</td>
              <td>int</td>
              <td>(width, height)</td>
              <td></td>
            </tr>
            <tr>
              <td>Output Image Resolution</td>
              <td>int</td>
              <td>(width, height)</td>
              <td></td>
            </tr>
            <tr>
              <td>Binary file for DSP</td>
              <td></td>
              <td></td>
              <td>Binary file</td>
            </tr>
          </table>
        </MathJaxContext>
      </Text>
    </div>
  );
}
