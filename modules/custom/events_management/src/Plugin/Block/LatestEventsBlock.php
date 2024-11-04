<?php

namespace Drupal\events_management\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a block to display the latest 5 created events.
 *
 * @Block(
 *   id = "latest_events_block",
 *   admin_label = @Translation("Latest Events Block"),
 *   category = @Translation("Custom")
 * )
 */
class LatestEventsBlock extends BlockBase
{

    public function build()
    {
        $query = \Drupal::entityQuery('event')
            ->condition('status', 1)
            ->sort('created', 'DESC')
            ->range(0, 5);
        $event_ids = $query->execute();
        $events = \Drupal::entityTypeManager()->getStorage('event')->loadMultiple($event_ids);

        $rendered_events = [];
        foreach ($events as $event) {
            $rendered_events[] = [
                'title' => $event->label(),
                'url' => $event->toUrl()->toString(),
            ];
        }

        return [
            '#theme' => 'latest_events_block',
            '#events' => $rendered_events,
        ];
    }
}
