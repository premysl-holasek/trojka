<?php

namespace Drupal\trojka_user_block\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Show a block with dynamic content based on taxonomy.
 *
 * @Block(
 *   id = "trojka_user_block",
 *   admin_label = @Translation("Trojka User Block"),
 *   category = @Translation("Custom block"),
 * )
 */
class TrojkaUserBlock extends BlockBase implements ContainerFactoryPluginInterface {
    /**
    * @var \Drupal\Core\Database\Connection
    */
    protected $database;

    /**
     * @param array $configuration
     *   A configuration array containing information about the plugin instance.
     * @param string $plugin_id
     *   The plugin_id for the plugin instance.
     * @param mixed $plugin_definition
     *   The plugin implementation definition.
     * @param \Drupal\Core\Database\Connection $database
     *   Database connector
     */
    public function __construct(array $configuration, $plugin_id, $plugin_definition, \Drupal\Core\Database\Connection $database) {
        parent::__construct($configuration, $plugin_id, $plugin_definition);
        $this->database = $database;
    }

    /**
     * @param \Symfony\Component\DependencyInjection\ContainerInterface $container
     *
     * @return static
     */
    public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
        return new static(
            $configuration,
            $plugin_id,
            $plugin_definition,
            $container->get('database')
        );
    }

    /**
     * {@inheritdoc}
     */
    public function build() {
        $uid = \Drupal::currentUser()->id();
        if ($uid > 0 && $user = \Drupal\user\Entity\User::load($uid)) {
            $name =  $user->getDisplayName();
            if (!$user->user_picture->isEmpty()) {
                $style = \Drupal::entityTypeManager()->getStorage('image_style')->load('avatar');
                $uri = $user->user_picture->entity->getFileUri();
                $picture = $style->buildUrl($uri);
            }
            else {
                $picture = '/'. \Drupal::theme()->getActiveTheme()->getPath() . '/images/user-placeholder.png';
            }

            return [
                '#markup' => '
        <div class="hamburger">
            <span class="hamburger__part"></span>
            <span class="hamburger__part"></span>
            <span class="hamburger__part"></span>
            <span class="hamburger__part"></span>
            <span class="hamburger__part"></span>
            <span class="hamburger__part"></span>
        </div>
        <div class="login">
            <a href="/user" class="login__user">
                <div class="avatar-image">
                    <img alt="' . $name . '" src="' . $picture . '" />
                </div>
                <span class="logged-in__username">' . $name . '</span>
            </a>
            <a href="/user/logout" class="login__logout">
                ' . $this->t('Logout') . '
                <i class="icon-login"></i>
            </a>
        </div>
                ',
                '#cache' => ['max-age' => 0]
            ];
        } else {
            return [
                '#markup' => '
        <div class="hamburger">
            <span class="hamburger__part"></span>
            <span class="hamburger__part"></span>
            <span class="hamburger__part"></span>
            <span class="hamburger__part"></span>
            <span class="hamburger__part"></span>
            <span class="hamburger__part"></span>
        </div>
        <div class="login">
            <a href="/user/login" class="login__logout">
                ' . $this->t('Login') . '
                <i class="icon-login"></i>
            </a>
        </div>
                ',
                '#cache' => ['max-age' => 0]
            ];
        }
    }

}